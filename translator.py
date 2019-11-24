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
	print( "Run int from a directory you need to create translations, eg app/src/main/res" )
	print( "-v - verbose" )
	print( "-f - input file")
	print( "-s - input string")
	print( "-d - dry run")
	print( "-h - usage")


def process_arguments():
	global dryRun
	global fileName
	global verbose
	global inputString

	try:
		opt, args = getopt.getopt( sys.argv[1:], 'dhf:vs:d', [] )
	except getopt.GetoptError as err:
		sys.stderr.write( str( err ) )
		print_usage()
		sys.exit( 1 )

	for o, v in opt:
		if o == "-f":
			if v and not os.path.isfile( v ):
				sys.stderr.write( '{} is not a file'.format( v ) )
				print_usage()
				sys.exit( 1 )
			fileName = v
			sys.stderr.write( "Already done translations may be overwritten" )
			sys.exit( 1 )
		elif o == "-d":
			dryRun = True
		elif o == "-s":
			inputString = v
		elif o == "-h":
			print_usage()
			sys.exit( 0 )
		elif o == "-v":
			verbose = True
		elif o == '-d':
			dryRun = True

	if not fileName and not inputString:
		sys.stderr.write( "Source required\n" )
		sys.exit( 1 )

	if fileName and inputString:
		sys.stderr.write( "File or string needs to be provided but not the both\n" )
		print_usage()
		sys.exit(1)


def collect_translations():
	global fileName
	words_list = []

	with open( fileName, "r" ) as f:
		while True:
			line = f.readline()

			if len( words_list ) and not line.strip():
				break

			m = re.search( r'<string\s+name="([^"]+?)"\s*>(.+)</string>', line )

			if m:
				words_list.append( ( m.group( 1 ), m.group( 2 ) ) )

	return words_list


def save_translation(words_list, language):
	dir_name = "values-{}".format( language )

	content = "<resources>\n"

	for translation_code, translation_string in words_list:
		content += "<string name=\"{}\">{}</string>\n".format( translation_code, translation_string )

	content += "</resources>\n"

	file_name = dir_name + "/string.xml"

	if not os.path.isdir( dir_name ):
		os.mkdir( dir_name )

	with open(file_name, "w") as f:
		f.write( content )


def calls_control():
	global callsCount
	global callsPerMinute
	global callsStart
	global lastCallTime

	if lastCallTime:
		current_time = time.clock()
		seconds_between = 60 / callsPerMinute

		if current_time - lastCallTime < seconds_between:
			# print( 'Sleeping for {}'.format( seconds_between - ( current_time - lastCallTime ) ) )
			time.sleep( seconds_between - ( current_time - lastCallTime ) )

	lastCallTime = time.clock()
	# print( 'Call at {}'.format( time.time() ) )


#####################################################################################################

dryRun = False
fileName = ""
verbose = False
inputString = ""
callsPerMinute = 60
callsCount = 0
lastCallTime = 0
callsStart = time.clock()

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

# while True:
# 	calls_control()
# sys.exit( 0 )

fromL = "en"
baseURL = 'https://translate.google.com/translate_a/single?client=webapp&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t'

# translate a string
if inputString:
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
		request = urllib.request.Request( url, headers=headers )
		opener = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
		response = opener.open( request )

		rawResponse = response.read().decode( "utf-8" )
		jsonResponse = json.loads( rawResponse )
		translation = jsonResponse[ 0 ][ 0 ][ 0 ].replace( "'", "\\'" )

		print( "<{}>".format( toL ) )
		print( translation )
		print( "</{}>".format( toL ) )

	sys.exit( 0 )

# translate a file
list = collect_translations()

sys.stderr.write( 'Number of translations: {}\n'.format( len( list ) ) )

for toL in myLanguages:
	sys.stderr.write( 'Translation to {}\n'.format( toL ) )
	output = []
	targetLanguage = toL.split("-")[ 0 ]

	for code, text in list:
		calls_control()
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
		request = urllib.request.Request( url, headers=headers )
		opener = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
		response = opener.open( request )

		rawResponse = response.read().decode( "utf-8" )
		jsonResponse = json.loads( rawResponse )
		translation = jsonResponse[ 0 ][ 0 ][ 0 ].replace( "'", "\\'" )

		output.append( ( code, translation ) )

	save_translation(output, targetLanguage)
