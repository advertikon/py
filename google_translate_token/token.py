import urllib.request
import re

'''
Target file: https://translate.google.com.ua/translate/releases/twsfe_w_20190617_RC01/r/js/translate_m.js
Lines of interest: 7372 -> 7362
'''

headers = {
	"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
	"Accept-Encoding": "none",
	"Accept-Language": "en",
	"Connection": "keep-alive",
	"DNT": "1",
	"Upgrade-Insecure-Requests": "1",
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
}

baseToken = None

def echo( s ):
	print( s )

def get( string ):
	b = getBaseToken()

	# print( "Base token: " + b )

	c = "&tk="
	d = b.split( "." )
	b = int( d[ 0 ] )
	e = []
	f = 0
	g = 0
	# print( "First part of base token: %s" % b )
	while ( g < len( string ) ):
		h = ord( string[ g ] )

		if 128 > h:
			# e[ f ] = h
			# f += 1
			e.append( h )
		elif 2048 > f:
			# e[ f ] = h >> 6 | 192
			# f += 1
			e.append( h >> 6 | 192 )
		elif 55296 == ( h & 64512 ) and g + 1 < len( string ) and 56320 == ( org( a[ g + 1 ] ) & 64512 ):
			g += 1
			h = 65536 + ( ( h & 1023 ) << 10  ) + ( ord( string[ g ] ) & 1023 )
			# e[ f ] = h >> 18 | 240
			# f += 1
			e.append( h >> 18 | 240 )
			# e[ f ] = h >> 12 & 63 | 128
			# f += 1
			e.append( h >> 12 & 63 | 128 )
		else:
			# e[ f ] = h >> 12 | 224
			# f += 1
			e.append( h >> 12 | 224 )
			# e[ f ] = h >> 6 & 63 | 128
			# f += 1
			e.append( h >> 6 & 63 | 128 )
			# e[ f ] = h & 63 | 128
			# f += 1
			e.append( h >> 63 | 128 )

		# 128 > h ? e[f++] = h :
		# 	(2048 > h ? e[f++] = h >> 6 | 192 :
		# 		(55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ?
		# 			(h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023),
		# 			e[f++] = h >> 18 | 240,
		# 			e[f++] = h >> 12 & 63 | 128) :
		# 		e[f++] = h >> 12 | 224,
		# 		e[f++] = h >> 6 & 63 | 128),
		# 		e[f++] = h & 63 | 128)

		g += 1

	# print( "E = ", e )
	
	string = b
	f = 0

	while ( f < len( e ) ):
		string += e[ f ]
		string = mix( string, "+-a^+6" )
		f += 1

	# print( "After first mix: %s" % string )

	string = mix( string, "+-3^+b+-f" )

	# print( "After second mix: %s" % string )

	string ^= int( d[ 1 ] )

	# print( "After ^: %s" % string )

	if 0 > string:
		string = ( string & 2147483647 ) + 2147483648

	# print( "After IF: %s" % string )

	string %= 1000000

	# print( "After %%=: %s" % string )

	return "&tk=%s.%s" % ( string, string ^ b )

def mix( a, b ):
	''' a - integer, b - string code'''
	c = 0
	
	while( c < len( b ) - 2 ):
		d = b[ c + 2 ]

		if "a" <= d:
			d = ord( b[ c + 2 ] ) - 87
		else:
			d = int( d )

		if "+" == b[ c + 1 ]:
			d = a >> d
		else:
			d = a << d

		if "+" == b[ c ]:
			a = a + d & 4294967295
		else:
			a = a ^ d

		# d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
		# d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
		# a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d

		c += 3

	return a

def getBaseToken():
	global baseToken

	if baseToken:
		return baseToken

	print( 'Retrieving base token' )
	url = "https://translate.google.com/"

	request  = urllib.request.Request( url, headers = headers )
	opener   = urllib.request.build_opener(  )
	response = opener.open( request )

	match = re.search( r'tkk\s*:.*?([0-9.]+)', response.read().decode( "utf-8" ) )

	if( match ):
		baseToken = match.group( 1 )
	else:
		raise Exception( 'Cannot detect base token value' )

	return baseToken