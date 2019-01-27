import sublime
import sublime_plugin
import sys
import os.path
import time
import subprocess
import json
import pickle
import pprint

if sys.path.count( os.path.dirname( __file__ ) ) == 0:
	sys.path.append( os.path.dirname( __file__ ) )
	sys.path.extend( [ '/usr/lib/python36.zip', '/usr/lib/python3.6', '/usr/lib/python3.6/lib-dynload', \
		'/usr/local/lib/python3.6/dist-packages', '/usr/lib/python3/dist-packages', '/home/max/.local/lib/python3.6/site-packages' ] )

import phply_local.phpparse as p
import phply_local.phplex as l


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


def prettyPrint( data, stream ):
	for item in data:
		if hasattr( item, 'generic'):
			item = item.generic()
		print( stream )
		pprint.pprint( item, stream=stream )
