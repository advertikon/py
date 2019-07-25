import time
import urllib.request
import json
import os
import getopt
import sys
import random

clean_run = False
coordinates = None
current_calls_file = "weathe_current_calls"
current_dates_file = "weathe_current_dates"
forecast_calls_file = "weathe_forecast_calls"
forecast_dates_file = "weathe_forecast_dates"
coords_file = "coords"

def print_usage():
	print( "Usage: ")
	print( "-f - flush data. Start anew" )
	print( "-c - by coordinates ( 0 - sitiz )")
	print( "-h - usage")

def process_arguments():
	global clean_run
	global coordinates

	try:
		opt, args = getopt.getopt( sys.argv[1:], 'hfc:', [] )
	except getopt.GetoptError as err:
		sys.stderr.write( str( err ) )
		print_help()
		sys.exit( 1 )

	for o, v in opt:
		if o in ( "-f" ):
			clean_run = True
		if o in ( "-c" ):
			try:	
				coordinates = int( v )
			except ValueError:
				print( "Invalid coordinate offset: {}".format( v ) )
				sys.exit( 7 )
		elif o in ( "-h" ):
			print_usage()
			sys.exit( 0 )

def flush_files():
	print( "Flushing files" )
	global current_calls_file
	global current_dates_file
	# global forecast_calls_file
	# global forecast_dates_file

	for f in [ current_calls_file, current_dates_file ]:
		c = open( f, "w" )
		c.close()


def increment_call_count( which = "Current" ):
	global current_calls_file
	global forecast_calls_file

	if which == "Current":
		name = current_calls_file
	else:
		name = forecast_calls_file

	if os.path.isfile( name ):
		mode = "r"
	else:
		mode = "w+"

	with open( name, mode ) as f:
		calls = f.read()

		if not calls:
			calls = 0
		else:
			calls = calls.replace( ",", "" ).strip()

			try:
				calls = int( calls )
			except ValueError:
				print( "Invalid calls value: {}".format( calls ) )
				calls = 0
	calls += 1

	with open( name, "w" ) as f:
		f.write( "{:,d}".format( calls ) )

def remember_time( time, which = "Current" ):
	global current_dates_file
	global forecast_dates_file

	if which == "Current":
		name = current_dates_file
	else:
		name = forecast_dates_file

	changed = False

	if os.path.isfile( name ):
		mode = "r"
	else:
		mode = "w+"

	with open( name, mode ) as f:
		dates = f.readlines()

		if not len( dates ):
			dates = [ time ]
			changed = True
		elif dates[ len( dates ) - 1 ].strip() != time:
			dates.append( time + "\n" )
			changed = True

	if changed:
		with open( name, "w" ) as f:
			f.writelines( dates )

def get_key():
	if not os.path.isfile( "owak" ):
		print( "API KEY is missing" )
		sys.exit( 4 )

	with open( "owak", "r" ) as f:
		lines = f.readlines()
		# key = random.choice( lines ).strip()
		key = lines[ 0 ].strip()
		print( 'Key: {}'.format( key ) )

		return key

def get_city():
	global coordinates
	global sity_id
	global coords_file

	if coordinates is not None:
		if not os.path.isfile( coords_file ):
			print( "File with coordinates ({}) does not exist".format( coords_file ) )
			sys.exit( 5 )

		with open( coords_file, "r" ) as f:
			c = f.readlines()

			if ( coordinates >= len( c ) ):
				print( "Coordinates index is out of bound ({})".format( len( c ) - 1 ) )
				sys.exit( 6 )

			data = c[ coordinates ].strip().split( "\t" )

			if ( len( data ) is not 3 ):
				print( "Coordinates record is malformed" )
				sys.exit( 7 )

			return "lat={}&lon={}".format( data[ 0 ], data[ 1 ] )

	#default case
	return "id={}".format( sity_id )


################################################################################################

sity_id = 687700
curent_weather_url = "https://api.openweathermap.org/data/2.5/weather"
forecast_url = "https://api.openweathermap.org/data/2.5/forecast"
units = "metric"

# print ( time.gmtime( time.time() ) )

try_count = 0

process_arguments()

if clean_run:
	flush_files()

while True:

	try:
		with urllib.request.urlopen( '{}?{}&APPID={}&units={}'.format( curent_weather_url, get_city(), get_key(), units ) ) as f:
			resp = f.read().decode( "utf-8" )
			j = json.loads( resp )

			# print( j )
			# sys.exit( 0 )

			if j.get( "cod" ) != 200:
				print( j )
				break

			increment_call_count()
			# print( j )
			dt = time.ctime( j.get( 'dt' ) )
			main = j.get( "main" )
			print( '{}: {} - ({} - {}) - {}'.format( dt, main.get( 'temp' ), main.get( 'temp_min' ), main.get( 'temp_max' ), j.get( "name" ) ) )
			remember_time( dt )
			# time.sleep( 1 )
			try_count = 0

	except urllib.error.URLError as e:
		print( e )
		if try_count > 10:
			prtint( "Internet error" )
			sys.exit( 1 )

		print( 'Connection error. Waiting {} second(s) to retry'.format( 1 << try_count ) )
		time.sleep( 1 << try_count )
		try_count += 1
		continue

	try:
		with urllib.request.urlopen( '{}?{}&APPID={}&units={}'.format( forecast_url, get_city(), get_key(), units ) ) as f:
			resp = f.read().decode( "utf-8" )
			j = json.loads( resp )
			# print( j )
			# sys.exit( 0 )

			cod = int( j.get( 'cod' ).strip() )

			if cod != 200:
				print( 'Return code: {}. Exit'.format( cod ) )
				print( j )
				sys.exit( 2 )

			for f in j.get( "list" ):
				dt = time.ctime( f.get( 'dt' ) )
				temp = f.get( "main" ).get( "temp" )
				weather = f.get( "weather" )[ 0 ].get( "description" )
				print( "\t: {}: {} - {}".format( dt, temp, weather ) )
			# time.sleep( 1 )
			try_count = 0

			sys.exit( 0 )

	except urllib.error.URLError as e:
		print( e )
		if try_count > 10:
			prtint( "Internet error" )
			sys.exit( 1 )

		print( 'Connection error. Waiting {} second(s) to retry'.format( 1 << try_count ) )
		time.sleep( 1 << try_count )
		try_count += 1
		continue