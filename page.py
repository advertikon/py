import os
import phply_local.phpparse as p
import phply_local.phplex as l
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
from .phply_local.phpast import *
import re

mPage = {}

class Page:
	view        = None
	structure   = None
	cacheFolder = os.path.dirname( __file__ ) + "/cache/"
	fileName    = None
	hashCode    = None
	classes     = []
	functions   = []
	constants   = []
	globalScope = []
	namespace = ""

	def __init__( self, view ):
		self.view     = view
		self.fileName = view.file_name()

	def get( view, createNew = False ):
		global mPage
		h_md5 = hashlib.md5()
		h_md5.update( view.file_name().encode( "utf-8" ) )

		h    = h_md5.hexdigest()
		print( "Getting page hash: %s, file: %s" % ( h, view.file_name() ) )
		page = mPage.get( h )

		if None == page:
			if createNew:
				print( "Crating new page for %s" % view.file_name() );
				page          = Page( view )
				page.hashCode = h
				mPage[ h ]    = page
				page.parse()
			else:
				print( "Page does not exist" )
				print( "Pages count is %s" % len( mPage ) )
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
			self.prettyPrint( self.structure )
			self.parseStructure()
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
			self.namespace = None
			mPage.pop( code )
		else:
			print( "Assist. Cannot save page structure - page object is None" )

	def save( self ):
		start = time.time()
		dir = self.cacheFolder + self.namespace.replace( "\\", "/" ) + "/"
		print( "Dir to save: " + dir )

		if ( not os.access( dir, os.F_OK ) ):
			print( "Assist: cache folder does not exist. Create it" )
			os.makedirs( self.cacheFolder + self.namespace.replace( "\\", "/" ) )
		print( len( self.classes ) )
		for c in self.classes:
			print( c.name )
			with open( dir + c.name, "wb" ) as dump_f:
				pickle.dump( c, dump_f, 2 )
			
		if len( self.constants ):
			with open( dir + "constants", "wb" ) as dump_f:
				pickle.dump( self.constants, dump_f, 2 )

		if len( self.functions ):
			with open( dir + "functions", "wb" ) as dump_f:
				pickle.dump( self.constants, dump_f, 2 ) 

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
		# r = self.view.expand_by_class( sublime.Region( pos, pos ), sublime.CLASS_WORD_END | sublime.CLASS_PUNCTUATION_START, "\t" )
		r = self.view.word( sublime.Region( pos, pos ) )
		self.view.add_regions( "error", [ r ], "invalid", "circle", sublime.DRAW_SQUIGGLY_UNDERLINE )

	def clearError( self ):
		self.view.erase_regions( "error" )

	def parseStructure( self ):
		self.namespace = []
		self.classes   = []
		self.constants = []
		self.functions = []

		for item in self.structure:
			if type( item ).__name__ == "Namespace":
				self.namespace = item.name
				
			elif type( item ).__name__ == "Class":
				self.classes.append( item )

			elif type( item ).__name__ == "ConstantDeclarations":
				self.constants = item.nodes

			elif type( item ).__name__ == "Function": 
				self.functions.append( item )

	def prettyPrint( self, data ): 
		for item in data:
			if hasattr( item, 'generic'):
				item = item.generic( True )
			pprint.pprint( item )

	def scope( self ):
		pos = self.view.sel()[ 0 ].begin()
		# line = self.view.line( pos )
		# print( "Row: %s, col: %s" % self.view.rowcol( pos ) )
		buff = self.view.substr( sublime.Region( 0, pos ) )
		scope_start = 0
		brace_count = 0

		for i in reversed( range( 0, len( buff ) ) ):
			if buff[ i ] == "{":
				brace_count += 1

				if brace_count == 1:
					pos = self.findScopeStart( buff, i )

					if None != pos:
						scope_start = pos
						break
					else:
						brace_count = 0

			elif buff[ i ] == "}":
				brace_count -= 1

		print( "Buff len: %s" % len( buff ) )
		print( "Offset: %s" % scope_start )
		row, col = self.view.rowcol( scope_start )
		row += 1
		print( "Row: %s, col: %s" % ( row, col ) )

	def findScopeStart( self, buff, pos ):
		print( "Search around: '" + buff[ pos-20 : pos ] + "'" )
		# match = re.search( r"function\s*[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*\s*\([^)]*\)\s*$", buff[ : pos ] )
		re_class   = r"class \s* [a-zA-Z_\x7f-\xff\\][a-zA-Z0-9_\x7f-\xff\\]* \s* (extends \s* [a-zA-Z_\x7f-\xff\\][a-zA-Z0-9_\x7f-\xff\\]* )? \s* $"
		re_func    = r"function \s* [a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]* \s* \([^)]*\) \s* $"
		re_closure = r"function \s* \([^)]*\) \s* (use \s* \([^)]*\))? \s* $"
		match = re.search( "(" + re_class + "|" + re_func + "|" + re_closure + ")" , buff[ : pos ], re.X )

		if None != match:
			print( "Found" )
			return match.start( 0 )
		else:
			print( "No match" )
			return None
