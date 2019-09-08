import urllib.request
import json
import urllib.parse
import pprint


def print_usage():
	print( "Usage: ")
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

#######################################################################

k1 = 'srRLeAmTroxPinDG8Aus3Ikl6tLGJd94'
k2 ='1726cc2d792447b6bd7ca2f00b1344f7'

base_url = 'https://api.accuweather.com/'

loc = 'locations/v1/326514'
details = 'false'
lang = 'uk-UA'
lang = 'en-GB'
location_id = 326514
metric = 'true'

u = '{}{}?apikey={}&language={}&details={}'.format( base_url, loc, k1, lang, details )

u = '{}/locations/v1/cities/autocomplete?apikey={}&q={}&language={}'.format( base_url, k1, urllib.parse.quote( 'лон' ), lang )

u = '{}currentconditions/v1/{}?apikey={}&details={}&language={}'.format( base_url, location_id, k1, details, lang )

u = '{}indices/v1/daily/groups?apikey={}'.format( base_url, k2 )

u = '{}indices/v1/daily/5day/{}/12?apikey={}'.format( base_url, location_id, k2 )

u = '{}alarms/v1/15day/{}?apikey={}'.format( base_url, location_id, k1 )

u = '{}alerts/v1/{}?apikey={}'.format( base_url, location_id, k1 )

u = '{}imagery/v1/maps/radsat/480x480/{}?apikey={}'.format( base_url, location_id, k1 )

u = '{}forecasts/v1/hourly/12hour/{}?apikey={}&metric={}&details={}'.format( base_url, location_id, k1, metric, details )

with urllib.request.urlopen( u ) as f:
	resp = f.read().decode( "utf-8" )
	j = json.loads( resp )

	# pprint.pprint( j, indent = 1 )
	print( json.dumps( j, indent = 2 ) )