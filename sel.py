from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re
import sys

import http.cookiejar
import urllib.request
import time

driver = webdriver.Chrome()
driver.get( "https://www.copart.com" )

sessionCookie = None

try:
	for c in driver.get_cookies():
		if re.match( r'^incap_ses_', c.get( 'name' ) ):
			sessionCookie = c
finally:
	driver.quit()

if None == sessionCookie:
	print( "Cookie not detected" )
	sys.exit( 1 )

print( sessionCookie )

cookie = http.cookiejar.Cookie(
	version = 0,
	name = sessionCookie.get( 'name' ),
	value = sessionCookie.get( 'value' ),
	port = None,
	port_specified = False,
	domain = sessionCookie.get( 'domain' ),
	domain_specified = True,
	domain_initial_dot = False,
	path = sessionCookie.get( 'path' ),
	path_specified = True,
	secure = sessionCookie.get( 'secure' ),
	expires = None,
	discard = None,
	comment = None,
	comment_url = None,
	rest = True
)

cookieJar = http.cookiejar.CookieJar()
cookieJar.set_cookie( cookie )

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

request  = urllib.request.Request( "https://www.copart.com", headers = headers )
opener   = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
response = opener.open( request )

print( response.read().decode( "utf-8" ) )
