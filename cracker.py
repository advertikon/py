import http.client
import http.cookiejar
import urllib.request
import urllib.parse
import re
import os

import socket
import socks
import requests
import base64

useCookie = False
ip='localhost' # change your proxy ip
port = 9050 # change your proxy port
socks.setdefaultproxy(socks.PROXY_TYPE_SOCKS5, ip, port)
socket.socket = socks.socksocket

def printHeaders( headers ):
	cookie = http.cookiejar.FileCookieJar( "cookie" )
	cookie.extract_cookies( resp, request )

	for k, v in headers:
		print( k, ":", v )

def request( url ):
	print( "Requesting " + url )
	request  = urllib.request.Request( url, headers = headers )
	opener   = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookie ) )
	response = opener.open( request )

	return response

def crc( str ):
	out = 0;
	for c in str:
		out += ord( c );

	return m_key;

def decode(data, fn):
	secretKey = ()
	y = 0;
	temp;
	testResult = "";
	tempData = "";

	data = base64.base64decode( data );
	val = 0;

	for c in data:
		tempData += "{:02x}".format( c )

	data = urllib.parse.quote( tempData );
	secretKey = [ i for i in range( 256 ) ]

	for i in secretKey:
		y = ( y +  i + ord( fn[ i % len( fn ) ] ) ) % 256
		temp = i;
		secretKey[ x ] = secretKey[ y ];
		secretKey[ y ] = temp;

	x = 0;
	y = 0;
	var i = 0;
	
	for i in data:
		x = (x + 1) % 256;
		y = (y + secretKey[ x ] ) % 256;
		temp = secretKey[ x ];
		secretKey[ x ] = secretKey[ y ];
		secretKey[ y ] = temp;
		testResult = testResult + chr( ord( i ) ^ secretKey[ ( secretKey[ x ] + secretKey[ y ] ) % 256 ] );

	return testResult;


####################################################################################################

cookie = http.cookiejar.MozillaCookieJar()

if useCookie and os.path.isfile( "cookie" ):
	cookie.load( "cookie" )

headers = {
	"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
	"Accept-Encoding": "none",
	"Accept-Language": "en",
	"Connection": "keep-alive",
	"DNT": "1",
	"Upgrade-Insecure-Requests": "1",
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
	# "Cookie": "incap_ses_729_242093=/j+dOgUFlA/+VmRrh+4dCrwanlwAAAAAEXf46pByn8cBLwU6WBJ+mQ=="
}

navigatorData = "navigator%3Dtrue,navigator.vendor%3DGoogle%20Inc.,navigator.appName%3DNetscape,navigator.plugins.length%3D%3D0%3Dfalse,navigator.platform%3DLinux%20x86_64,navigator.webdriver%3Dundefined,plugin_ext%3DTypeError%3A%20Cannot%20read%20property%20'filename'%20of%20undefined,ActiveXObject%3Dfalse,webkitURL%3Dtrue,_phantom%3Dfalse,callPhantom%3Dfalse,chrome%3Dtrue,yandex%3Dfalse,opera%3Dfalse,opr%3Dfalse,safari%3Dfalse,awesomium%3Dfalse,puffinDevice%3Dfalse,__nightmare%3Dfalse,domAutomation%3Dfalse,domAutomationController%3Dfalse,_Selenium_IDE_Recorder%3Dfalse,document.__webdriver_script_fn%3Dfalse,document.%24cdc_asdjflasutopfhvcZLmcfl_%3Dfalse,process.version%3Dfalse,navigator.cpuClass%3Dfalse,navigator.oscpu%3Dfalse,navigator.connection%3Dtrue,navigator.language%3D%3D'C'%3Dfalse,window.outerWidth%3D%3D0%3Dfalse,window.outerHeight%3D%3D0%3Dfalse,window.WebGLRenderingContext%3Dtrue,document.documentMode%3Dundefined,eval.toString().length%3D33"

url = "https://www.copart.com/"

response = request( url  ) #+ "/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3" )

with open( "output", "w" ) as f:
	f.write( response.read().decode( "utf-8" ) )

crcString = ""

for c in cookie:
	if re.match( r'^\s?incap_ses_', c.name ):
		crcString += crc( navigatorData + c.value )

salt = "813VS3efAyF7csIfnfHiy4wLHigQYLXv2g/ecA=="
hexHash = ""

i = 0
for c in salt:
	hexHash += "{:x}".format( ord( c ) + ord( crcString[ i % len( crcString ) ] ) );
# match = re.match( '<script src="(.*?)">', body )
# if match:
# 	next = match.group( 1 )
# else:
# 	raise Error( "script URL is missing at the first page" )

# next = "/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3"
#        "/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3"
# print( next )

# c.request( "GET", "/_Incapsula_Resource?SWUDNSAI=28&xinfo=8-15874296-0%200NNN%20RT%281553864887817%20548%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B12%284%2c315%2c0%29%20U18&incident_id=1226000100051018203-46740995291349160&edet=12&cinfo=04000000" )

# resp = c.getresponse()

# print( resp.status, resp.reason )
# print( resp.read() )

cookie.save( "cookie" )