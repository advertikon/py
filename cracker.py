import http.client
import http.cookiejar
import urllib.request
import re
import os

import socket
import socks
import requests

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

url = "https://www.copart.com/"

response = request( url + "/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3" )

with open( "second_page.html", "w" ) as f:
	f.write( response.read().decode( "utf-8" ) )

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