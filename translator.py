# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
import re
import sys
import getopt
import os

import http.cookiejar
import urllib.request
import time

import json

import google_translate_token.token as token
from urllib.parse import urlencode

# driver = webdriver.Chrome() # ~/.local/bin/chromedriver - driver location
# driver.get( "https://translate.google.com.ua/" )

cookieJar = http.cookiejar.CookieJar()
# print( 'Setting cookies...' )

# try:
# 	for c in driver.get_cookies():
# 		cookie = http.cookiejar.Cookie(
# 			version = 0,
# 			name = c.get( 'name' ),
# 			value = c.get( 'value' ),
# 			port = None,
# 			port_specified = False,
# 			domain = c.get( 'domain' ),
# 			domain_specified = True,
# 			domain_initial_dot = False,
# 			path = c.get( 'path' ),
# 			path_specified = True,
# 			secure = c.get( 'secure' ),
# 			expires = None,
# 			discard = None,
# 			comment = None,
# 			comment_url = None,
# 			rest = True
# 		)

# 		cookieJar.set_cookie( cookie )
# finally:
# 	driver.quit()


headers = {
	"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
	"Accept-Encoding": "none",
	"Accept-Language": "en",
	"Connection": "keep-alive",
	"DNT": "1",
	"Upgrade-Insecure-Requests": "1",
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
}

languages = {
	'auto': 'Automatic',
	'af': 'Afrikaans',
	'sq': 'Albanian',
	'am': 'Amharic',
	'ar': 'Arabic',
	'hy': 'Armenian',
	'az': 'Azerbaijani',
	'eu': 'Basque',
	'be': 'Belarusian',
	'bn': 'Bengali',
	'bs': 'Bosnian',
	'bg': 'Bulgarian',
	'ca': 'Catalan',
	'ceb': 'Cebuano',
	'ny': 'Chichewa',
	'zh-cn': 'Chinese Simplified',
	'zh-tw': 'Chinese Traditional',
	'co': 'Corsican',
	'hr': 'Croatian',
	'cs': 'Czech',
	'da': 'Danish',
	'nl': 'Dutch',
	'en': 'English',
	'eo': 'Esperanto',
	'et': 'Estonian',
	'tl': 'Filipino',
	'fi': 'Finnish',
	'fr': 'French',
	'fy': 'Frisian',
	'gl': 'Galician',
	'ka': 'Georgian',
	'de': 'German',
	'el': 'Greek',
	'gu': 'Gujarati',
	'ht': 'Haitian Creole',
	'ha': 'Hausa',
	'haw': 'Hawaiian',
	'iw': 'Hebrew',
	'hi': 'Hindi',
	'hmn': 'Hmong',
	'hu': 'Hungarian',
	'is': 'Icelandic',
	'ig': 'Igbo',
	'id': 'Indonesian',
	'ga': 'Irish',
	'it': 'Italian',
	'ja': 'Japanese',
	'jw': 'Javanese',
	'kn': 'Kannada',
	'kk': 'Kazakh',
	'km': 'Khmer',
	'ko': 'Korean',
	'ku': 'Kurdish (Kurmanji)',
	'ky': 'Kyrgyz',
	'lo': 'Lao',
	'la': 'Latin',
	'lv': 'Latvian',
	'lt': 'Lithuanian',
	'lb': 'Luxembourgish',
	'mk': 'Macedonian',
	'mg': 'Malagasy',
	'ms': 'Malay',
	'ml': 'Malayalam',
	'mt': 'Maltese',
	'mi': 'Maori',
	'mr': 'Marathi',
	'mn': 'Mongolian',
	'my': 'Myanmar (Burmese)',
	'ne': 'Nepali',
	'no': 'Norwegian',
	'ps': 'Pashto',
	'fa': 'Persian',
	'pl': 'Polish',
	'pt': 'Portuguese',
	'ma': 'Punjabi',
	'ro': 'Romanian',
	'ru': 'Russian',
	'sm': 'Samoan',
	'gd': 'Scots Gaelic',
	'sr': 'Serbian',
	'st': 'Sesotho',
	'sn': 'Shona',
	'sd': 'Sindhi',
	'si': 'Sinhala',
	'sk': 'Slovak',
	'sl': 'Slovenian',
	'so': 'Somali',
	'es': 'Spanish',
	'su': 'Sundanese',
	'sw': 'Swahili',
	'sv': 'Swedish',
	'tg': 'Tajik',
	'ta': 'Tamil',
	'te': 'Telugu',
	'th': 'Thai',
	'tr': 'Turkish',
	'uk': 'Ukrainian',
	'ur': 'Urdu',
	'uz': 'Uzbek',
	'vi': 'Vietnamese',
	'cy': 'Welsh',
	'xh': 'Xhosa',
	'yi': 'Yiddish',
	'yo': 'Yoruba',
	'zu': 'Zulu'
}

def print_usage():
	print( "Usage: ")
	pritn( "Run int from a directory you need to create translations, eg app/src/main/res" )
	print( "-v - verbose" )
	print( "-i - input file or string, id file save to file structure, if string to STDOUT")
	print( "-h - usage")

def process_arguments():
	global dryRun
	global input
	global verbose
	global isString

	try:
		opt, args = getopt.getopt( sys.argv[1:], 'dhi:v', [] )
	except getopt.GetoptError as err:
		sys.stderr.write( str( err ) )
		print_help()
		sys.exit( 1 )

	for o, v in opt:
		if o in ( "-i" ):
			if v and not os.path.isfile( v ):
				isString = True
			input = v
		elif o in ( "-c" ):
			try:    
				coordinates = int( v )
			except ValueError:
				print( "Invalid coordinate offset: {}".format( v ) )
				sys.exit( 7 )
		elif o == "-d":
			dryRun = True
		elif o in ( "-h" ):
			print_usage()
			sys.exit( 0 )
		elif o == "-v":
			verbose = True

	if not input:
		sys.stderr.write( "Source required\n" )
		sys.exit( 1 )

def collectTranslations():
	global input
	start = False
	list = []

	with open( input , "r" ) as f:
		while True:
			line = f.readline()

			if len( list ) and not line.strip():
				break

			m = re.search( r'<string\s+name="([^"]+?)"\s*>(.+)</string>', line )

			if ( m ):
				list.append( ( m.group( 1 ), m.group( 2 ) ) )

	return list

def saveTranslation( list, language ):
	dirName = "values-{}".format( language )

	content = "<resources>\n"

	for code, translation in list:
		content += "<string name=\"{}\">{}</string>\n".format( code, translation )

	content += "</resources>\n"

	fileName = dirName + "/string.xml"

	if not os.path.isdir( dirName ):
		os.mkdir( dirName )

	with open( fileName, "w" ) as f:
		f.write( content )


#####################################################################################################

dryRun = False
input = ""
verbose = False
isString = False

myLanguages = {
	# 'auto': 'Automatic',
	# 'af': 'Afrikaans',
	# 'sq': 'Albanian',
	# 'am': 'Amharic',
	'ar': 'Arabic',
	# 'hy': 'Armenian',
	# 'az': 'Azerbaijani',
	# 'eu': 'Basque',
	# 'be': 'Belarusian',
	# 'bn': 'Bengali',
	# 'bs': 'Bosnian',
	# 'bg': 'Bulgarian',
	# 'ca': 'Catalan',
	# 'ceb': 'Cebuano',
	# 'ny': 'Chichewa',
	'zh-cn': 'Chinese Simplified',
	# 'zh-tw': 'Chinese Traditional',
	# 'co': 'Corsican',
	# 'hr': 'Croatian',
	# 'cs': 'Czech',
	# 'da': 'Danish',
	# 'nl': 'Dutch',
	# 'en': 'English',
	# 'eo': 'Esperanto',
	# 'et': 'Estonian',
	# 'tl': 'Filipino',
	# 'fi': 'Finnish',
	'fr': 'French',
	# 'fy': 'Frisian',
	# 'gl': 'Galician',
	# 'ka': 'Georgian',
	'de': 'German',
	# 'el': 'Greek',
	# 'gu': 'Gujarati',
	# 'ht': 'Haitian Creole',
	# 'ha': 'Hausa',
	# 'haw': 'Hawaiian',
	'iw': 'Hebrew',
	'hi': 'Hindi',
	# 'hmn': 'Hmong',
	# 'hu': 'Hungarian',
	# 'is': 'Icelandic',
	# 'ig': 'Igbo',
	'id': 'Indonesian',
	# 'ga': 'Irish',
	'it': 'Italian',
	'ja': 'Japanese',
	# 'jw': 'Javanese',
	# 'kn': 'Kannada',
	# 'kk': 'Kazakh',
	# 'km': 'Khmer',
	'ko': 'Korean',
	# 'ku': 'Kurdish (Kurmanji)',
	# 'ky': 'Kyrgyz',
	# 'lo': 'Lao',
	# 'la': 'Latin',
	# 'lv': 'Latvian',
	# 'lt': 'Lithuanian',
	# 'lb': 'Luxembourgish',
	# 'mk': 'Macedonian',
	# 'mg': 'Malagasy',
	# 'ms': 'Malay',
	# 'ml': 'Malayalam',
	# 'mt': 'Maltese',
	# 'mi': 'Maori',
	# 'mr': 'Marathi',
	# 'mn': 'Mongolian',
	# 'my': 'Myanmar (Burmese)',
	# 'ne': 'Nepali',
	# 'no': 'Norwegian',
	# 'ps': 'Pashto',
	# 'fa': 'Persian',
	'pl': 'Polish',
	'pt': 'Portuguese',
	# 'ma': 'Punjabi',
	# 'ro': 'Romanian',
	'ru': 'Russian',
	# 'sm': 'Samoan',
	# 'gd': 'Scots Gaelic',
	# 'sr': 'Serbian',
	# 'st': 'Sesotho',
	# 'sn': 'Shona',
	# 'sd': 'Sindhi',
	# 'si': 'Sinhala',
	# 'sk': 'Slovak',
	# 'sl': 'Slovenian',
	# 'so': 'Somali',
	'es': 'Spanish',
	# 'su': 'Sundanese',
	# 'sw': 'Swahili',
	'sv': 'Swedish',
	# 'tg': 'Tajik',
	# 'ta': 'Tamil',
	# 'te': 'Telugu',
	# 'th': 'Thai',
	'tr': 'Turkish',
	'uk': 'Ukrainian',
	# 'ur': 'Urdu',
	# 'uz': 'Uzbek',
	# 'vi': 'Vietnamese',
	# 'cy': 'Welsh',
	# 'xh': 'Xhosa',
	# 'yi': 'Yiddish',
	# 'yo': 'Yoruba',
	# 'zu': 'Zulu'
}

process_arguments()

fromL = "en"
baseURL = 'https://translate.google.com/translate_a/single?client=webapp&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t'

# translate a string
if isString:
	for toL in myLanguages:
		query = {
			'sl': fromL,
			'tl': toL,
			'hl': toL,
			'otf': 1,
			'ssel': 0,
			'tsel': 0,
			'kc': 1,
			'q': input
		}

		url = baseURL + "&" + urlencode( query ) + token.get( input )
		request  = urllib.request.Request( url, headers = headers )
		opener   = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
		response = opener.open( request )

		rawResponse = response.read().decode( "utf-8" )
		jsonResponse = json.loads( rawResponse )
		translation = jsonResponse[ 0 ][ 0 ][ 0 ].replace( "'", "\\'" )

		print( "<{}>".format( toL ) )
		print( translation )
		print( "</{}>".format( toL ) )

	sys.exit( 0 )

# translate a file
list = collectTranslations()

for toL in myLanguages:
	output = []
	targetLanguage = toL.split("-")[ 0 ]

	for code, text in list:
		query = {
			'sl': fromL,
			'tl': toL,
			'hl': toL,
			'otf': 1,
			'ssel': 0,
			'tsel': 0,
			'kc': 1,
			'q': text
		}

		url = baseURL + "&" + urlencode( query ) + token.get( text )
		request  = urllib.request.Request( url, headers = headers )
		opener   = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
		response = opener.open( request )

		rawResponse = response.read().decode( "utf-8" )
		jsonResponse = json.loads( rawResponse )
		translation = jsonResponse[ 0 ][ 0 ][ 0 ].replace( "'", "\\'" )

		output.append( ( code, translation ) )

		if verbose:
			print( "%s (%s) => %s (%s)" % ( text, fromL, translation, targetLanguage ) )

	saveTranslation( output, targetLanguage )
