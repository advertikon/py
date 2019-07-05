from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re
import sys

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

baseURL = 'https://translate.google.com/translate_a/single?client=webapp&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t'

for text in [ "dinner", "home", "In order to do it", "Swipe the screen" ]:
	fromL = "en"
	toL = "ru"

	# print( "Translation: %s (%s => %s)" % ( text, fromL, toL ) )

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

	# url += ( "&sl=%s&tl=%s&hl=%s%s&q=%s" % ( fromL, toL, toL, token.get( text ),text ) )
	url = baseURL + "&" + urlencode( query ) + token.get( text )
	# print( url )

	request  = urllib.request.Request( url, headers = headers )
	opener   = urllib.request.build_opener( urllib.request.HTTPCookieProcessor( cookieJar ) )
	response = opener.open( request )

	rawResponse = response.read().decode( "utf-8" )
	jsonResponse = json.loads( rawResponse )

	print( "%s (%s) => %s (%s)" % ( text, fromL, jsonResponse[ 0 ][ 0 ][ 0 ], toL ) )
