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
	sys.path.extend( [ '/usr/local/lib/python3.5/dist-packages', '/home/max/.local/lib/python3.6/site-packages' ] )

from .page import Page
# import phply_local.phpparse as p
# import phply_local.phplex as l



class GetScopeCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		print( dir( self.view.sel() ) )

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
			page.initScope()
			# self.view.run_command( "get_scope" )



def prettyPrint( data, stream ): 
	for item in data:
		if hasattr( item, 'generic'):
			item = item.generic()
		print( stream )
		pprint.pprint( item, stream=stream )

def isTarget( fileName ):
	return fileName.endswith( ".php" )


	################################ PAGE CLASS ####################################################

	
