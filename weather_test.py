import time
import urllib.request
import json
import os
import getopt
import sys

clean_run = False
current_calls_file = "weathe_current_calls"
current_dates_file = "weathe_current_dates"
forecast_calls_file = "weathe_forecast_calls"
forecast_dates_file = "weathe_forecast_dates"

def print_usage():
	print( "Usage: ")
	print( "-f - flush data. Start anew" )
	print( "-h - usage")

def process_arguments():
	global clean_run

	try:
		opt, args = getopt.getopt( sys.argv[1:], 'hf', [] )
	except getopt.GetoptError as err:
		sys.stderr.write( str( err ) )
		print_help()
		sys.exit( 1 )

	for o, v in opt:
		if o in ( "-f" ):
			clean_run = True
		elif o in ( "-h" ):
			print_usage()
			sys.exit( 0 )

def flush_files():
	print( "Flushing files" )
	global current_calls_file
	global current_dates_file
	global forecast_calls_file
	global forecast_dates_file

	for f in [ current_calls_file, current_dates_file, forecast_calls_file, forecast_dates_file ]:
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
		return f.read().strip()

################################################################################################

key = get_key()
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
		with urllib.request.urlopen( '{}?id={}&APPID={}&units={}'.format( curent_weather_url, sity_id, key, units ) ) as f:
			resp = f.read().decode( "utf-8" )
			j = json.loads( resp )

			if j.get( "cod" ) != 200:
				print( j )
				break

			increment_call_count()
			# print( j )
			dt = time.ctime( j.get( 'dt' ) )
			print( '{}: {}'.format( dt, j.get( 'main' ).get( 'temp' ) ) )
			remember_time( dt )
			# time.sleep( 1 )
			try_count = 0

	except urllib.error.URLError:
		if try_count > 10:
			prtint( "Internet error" )
			sys.exit( 1 )

		pritn( 'Connection error. Waiting {} second(s) to retry'.format( 1 << try_count ) )
		time.sleep( 1 << try_count )
		try_count += 1
		continue

	try:
		with urllib.request.urlopen( '{}?id={}&APPID={}&units={}'.format( forecast_url, sity_id, key, units ) ) as f:
			resp = f.read().decode( "utf-8" )
			j = json.loads( resp )

			cod = int( j.get( 'cod' ).strip() )

			if cod != 200:
				print( 'Return code: {}. Exit'.format( cod ) )
				print( j )
				sys.exit( 2 )

			# increment_call_count( "Forecast" )
			# # print( j )
			# dt = j.get( "txt_dt" )
			# remember_time( dt, "Forecast" )

			# first forecast
			f = j.get( "list" )[ 0 ]
			dt = time.ctime( f.get( 'dt' ) )
			print( 'Forecast: {}: {}'.format( dt, f.get( 'main' ).get( 'temp' ) ) )
			# time.sleep( 1 )
			try_count = 0

	except urllib.error.URLError:
		if try_count > 10:
			prtint( "Internet error" )
			sys.exit( 1 )

		pritn( 'Connection error. Waiting {} second(s) to retry'.format( 1 << try_count ) )
		time.sleep( 1 << try_count )
		try_count += 1
		continue