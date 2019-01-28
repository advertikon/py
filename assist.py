import sublime
import sublime_plugin
import sys
import os.path
import time
import subprocess
import json
import pickle
import pprint
import hashlib

if sys.path.count( os.path.dirname( __file__ ) ) == 0:
	sys.path.append( os.path.dirname( __file__ ) )
	sys.path.extend( [ '/usr/local/lib/python3.5/dist-packages' ] )

import phply_local.phpparse as p
import phply_local.phplex as l

mPage = {}


class ExampleCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		self.view.set_status( "assist", "It works" )
		sublime.set_timeout( lambda: self.view.erase_status( "assist" ), 5000 )

		# self.view.show_popup_menu( ( "one", "two", "three" ), lambda index : print( "index is: " + str( index ) ) )

		# self.view.show_popup( "Hi there" )

		# print( self.view.size() )
		# debug = True
		# quiet = False
		file = "/var/www/html/oc/system/library/advertikon/rent";
		dir = os.path.dirname( __file__ ) + "/"

		parser = p.make_parser( False )

		# with open( file , 'r') as f:
		# 	phply.phpparse.run_parser( parser, f, quiet, debug )
		# cmd = ["python3", dir + "parser.py", "-r", file ]
		# print( cmd )
		print( p )
		start = time.time()

		# res = subprocess.check_output( cmd, stderr=subprocess.STDOUT )
		with open( "/var/www/html/oc/system/library/advertikon/advertikon.php", 'r' ) as f:
			s = f.read()

			lexer = l.lexer
			lexer.lineno = 1

			try:
				result = parser.parse( s, lexer=lexer.clone(), debug=False )
			except SyntaxError as e:
				if e.lineno is not None:
					print( f.name, e, 'near', repr( e.text ) )
				else:
					print( f.name, e )
					# sys.exit(1)
			except:
				print( "Critical error in:", f.name )

		parser.restart()
		end_parse = time.time()

		with open( dir + "sample", "wb" ) as dump_f:
			pickle.dump( result, dump_f, 2 )
			# prettyPrint( result, None )

		# with open( dir + "sample", "rb" ) as dump_f:
		# 	prettyPrint( pickle.load( dump_f ) )
		print( "Time: parse - %s, write - %s" % ( round( end_parse - start, 4 ), round( time.time() - end_parse, 4 ) ) )

class WindowCommand( sublime_plugin.WindowCommand ):
	def run( self ):
		print( self.window.extract_variables() )
		self.window.status_message( "test" )

class SetMarkCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		mark = [s for s in self.view.sel()]
		self.view.add_regions("mark", mark, "mark", "dot", sublime.DRAW_SOLID_UNDERLINE | sublime.PERSISTENT)
		print( self.view.style() )

class ViewEvents( sublime_plugin.ViewEventListener ):
	def on_load( self ):
		print( "On load" )

		if isTarget( self.view.file_name() ):
			print( "Assist: on async loading of %s..." % self.view.file_name() )
			page = Page.get( self.view, True )
			page.parse()
		else:
			print( "Not a target file" )

	def on_deactivated_async( self ):
		if isTarget( self.view.file_name() ):
			print( "Assist: on async deactivating of %s..." % self.view.file_name() )
			page = Page.get( self.view )
			if page != None:
				page.save()

	def on_activated_async( self ):
		pass
		# if isTarget( self.view.file_name() ):
		# 	print( "Assist: on async activating of %s..." % self.view.file_name() )
		# 	page = Page.get( self.view )

		# 	if page != None:
		# 		page.load()

	def on_close( self ):
		if isTarget( self.view.file_name() ):
			print( "Assist: on close of %s..." % self.view.file_name() )
			page = Page.get( self.view )

			if page != None:
				page.destroy()

	def on_modified( self ):
		if isTarget( self.view.file_name() ):
			print( "Assist: on modified of %s..." % self.view.file_name() )
			page = Page.get( self.view, True  )
			page.parse()

class Page:
	view = None
	structure = None
	cacheFolder = os.path.dirname( __file__ ) + "/cache/"
	fileName = None
	hashCode = None

	def __init__( self, view ):
		self.view     = view
		self.fileName = view.file_name()

	def get( view, createNew = False ):
		global mPage
		h_md5 = hashlib.md5()
		h_md5.update( view.file_name().encode( "utf-8" ) )

		h    = h_md5.hexdigest()
		page = mPage.get( h )

		if None == page:
			if createNew:
				print( "Crating new page for %s" % view.file_name() );
				page          = Page( view )
				page.hashCode = h
				mPage[ h ]    = page
			else:
				return None
		else:
			print( "Page for %s exists" % view.file_name() )

		return page

	def parse( self ):
		lexer = l.lexer
		lexer.lineno = 1
		start = time.time()
		parser = p.make_parser( False )

		self.clearError()

		try:
			self.structure = parser.parse( self.getContent(), lexer=lexer.clone(), debug=False )
			print( self.structure )
		except SyntaxError as e:
			print( e )
			if e.lineno is not None:
				print( self.fileName, e, 'near', repr( e.text ) )
				self.errorLine( e.lineno )
			else:
				print( self.fileName, e )

		parser.restart()
		print( "Assist: parsing time is %s" % round( time.time() - start, 4 ) )

	def getContent( self ):
		return self.view.substr( sublime.Region( 0, self.view.size() ) )

	def destroy( self ):
		if isinstance( self, Page ):
			global mPage
			print( "Destroying content of %s" % self.fileName )
			code           = self.hashCode
			self.view      = None
			self.structure = None
			self.fileName  = None
			self.hashCode  = None
			mPage.pop( code )
		else:
			print( "Assist. Cannot save page structure - page object is None" )

	def save( self ):
		start = time.time()

		if ( not os.access( self.cacheFolder, os.F_OK ) ):
			print( "Assist: cache folder does not exist. Create it" )
			os.mkdir( self.cacheFolder, 0o755 )

		with open( self.cacheFolder + self.hashCode, "wb" ) as dump_f:
			pickle.dump( self.structure, dump_f, 2 )

		print( "Assist: Saving page structure for %s in %s" % ( self.fileName, round( time.time() - start, 4 ) ) )

	def load( self ):
		start = time.time()

		if ( not os.access( self.cacheFolder + self.hashCode, os.F_OK ) ):
			print( "Assist. File structure does not exist" )
			return

		with open( self.cacheFolder + self.hashCode, "rb" ) as dump_f:
			print( "Assist. Loading page structure for %s in %s" % ( self.fileName, round( time.time() - start, 4 ) ) )
			self = structure = pickle.load( dump_f )

	def errorLine( self, pos ):
		r = self.view.expand_by_class( sublime.Region( pos, pos + 1 ), sublime.CLASS_LINE_START | sublime.CLASS_LINE_END, "\n\t " )
		# r = sublime.Region( pos, pos + 1 )
		self.view.add_regions( "error", [ r ], "mark", "dot", sublime.DRAW_SOLID_UNDERLINE )

	def clearError( self ):
		self.view.erase_regions( "error" )

def prettyPrint( data, stream ): 
	for item in data:
		if hasattr( item, 'generic'):
			item = item.generic()
		print( stream )
		pprint.pprint( item, stream=stream )

def isTarget( fileName ):
	return fileName.endswith( ".php" )
