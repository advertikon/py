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
import io

import google_translate_token.token as token
from urllib.parse import urlencode
# from fake_useragent import UserAgen
# import requests
from lxml import etree

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
	"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,"
		"application/signed-exchange;v=b3",
	"Accept-Encoding": "none",
	"Accept-Language": "en",
	"Connection": "keep-alive",
	"DNT": "1",
	"Upgrade-Insecure-Requests": "1",
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 "
		"Safari/537.36"
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
	print("Usage: ")
	print("Run int from a directory you need to create translations, eg app/src/main/res")
	print("-v - verbose")
	print("-f - input file")
	print("-s - input string")
	print("-h - usage")


def process_arguments():
	global fileName
	global verbose
	global inputString

	try:
		opt, args = getopt.getopt(sys.argv[1:], 'hf:vs:', [])
	except getopt.GetoptError as err:
		sys.stderr.write(str(err))
		print_usage()
		sys.exit(1)

	for o, v in opt:
		if o == "-f":
			if v and not os.path.isfile(v):
				sys.stderr.write('{} is not a file\n'.format(v))
				print_usage()
				sys.exit(1)
			fileName = v
		elif o == "-s":
			inputString = v
		elif o == "-h":
			print_usage()
			sys.exit(0)
		elif o == "-v":
			verbose = True

	if not fileName and not inputString:
		sys.stderr.write("Source required\n")
		print_usage()
		sys.exit(1)

	if fileName and inputString:
		sys.stderr.write("File or string needs to be provided but not the both\n")
		print_usage()
		sys.exit(1)


def collect_translations(file):
	words_list = {}

	if not os.path.isfile(file):
		return words_list

	with open(fileName, "r") as f:
		root = etree.fromstring(f.read())

		for string in root:
			if string.get("translatable") and "false" == string.get("translatable"):
				continue

			words_list[string.get('name')] = string.text

	return words_list


def translate_file():
	global myLanguages
	global fileName
	global fromL

	translations = collect_translations(fileName)
	sys.stderr.write('Number of translations: {}\n'.format(len(translations)))

	for toL in myLanguages:
		sys.stderr.write('Translation to {}\n'.format(toL))
		translate(fromL, toL, translations)


def translate(from_lang, to_lang, translations):
	global baseURL
	global headers
	global cookieJar

	target_language = to_lang.split("-")[0]
	output = collect_translations("values-{}/strings.xml".format(target_language))
	total_count = len(translations)
	count = 0

	for code, text in translations.items():
		if output.get(code):
			print_inline('{:.0%} Skipping translation for {}'.format(count/total_count, code))
			count += 1
			time.sleep(1)
			continue

		calls_control()
		query_values = {
			'sl': from_lang,
			'tl': to_lang,
			'hl': to_lang,
			'otf': 1,
			'ssel': 0,
			'tsel': 0,
			'kc': 1,
			'q': text
		}

		url = baseURL + "&" + urlencode(query_values) + token.get(text)

		print_inline("{:.0%} Translating '{}'".format(count / total_count, code))

		request = urllib.request.Request(url, headers=headers)
		opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookieJar))
		response = opener.open(request)

		raw_response = response.read().decode("utf-8")
		json_response = json.loads(raw_response)
		translation = json_response[0][0][0].replace("'", "\\'")

		output[code] = translation
		count += 1

	print("")
	save_translation(output, target_language)


def save_translation(words_list, language):
	dir_name = "values-{}".format(language)
	root = etree.Element("resources")

	for translation_code, translation_string in words_list.items():
		item = etree.SubElement(root, 'string', name=translation_code)
		item.text = translation_string

	file_name = dir_name + "/strings.xml"

	if not os.path.isdir(dir_name):
		os.mkdir(dir_name)

	with open(file_name, "w") as f:
		f.write(etree.tostring(root, encoding="unicode", pretty_print=True))


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
			time.sleep(seconds_between - (current_time - lastCallTime))

	lastCallTime = time.clock()


# print( 'Call at {}'.format( time.time() ) )


def check_cwd():
	cwd = os.getcwd()

	if os.path.basename(cwd) != "res":
		pritn("CWD should be 'res'")
		sys.exit(0)


def translate_string():
	global myLanguages

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

		url = baseURL + "&" + urlencode(query) + token.get(input)
		request = urllib.request.Request(url, headers=headers)
		opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookieJar))
		response = opener.open(request)

		raw_response = response.read().decode("utf-8")
		json_response = json.loads(raw_response)
		translation = json_response[0][0][0].replace("'", "\\'")

		print("<{}>".format(toL))
		print(translation)
		print("</{}>".format(toL))


def print_inline(text):
	global unbuffered_out
	global terminal_columns

	if not unbuffered_out:
		try:
			unbuffered_out = io.TextIOWrapper(open(sys.stdout.fileno(), 'wb', 0), write_through=True)
		except TypeError:
			unbuffered_out = os.fdopen(sys.stdout.fileno(), 'w', 0)

	unbuffered_out.write("\b" * terminal_columns)

	if len(text) < terminal_columns:
		text += " " * (terminal_columns - len(text))
	elif len(text) > terminal_columns:
		text = text[0, terminal_columns]

	unbuffered_out.write(text)


#####################################################################################################

fileName = ""
verbose = False
inputString = ""
callsPerMinute = 60
callsCount = 0
lastCallTime = 0
callsStart = time.clock()
unbuffered_out = None

terminal_rows, terminal_columns = os.popen('stty size', 'r').read().split()
terminal_columns = int(terminal_columns)

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
check_cwd()
# while True:
# 	calls_control()
# sys.exit( 0 )

fromL = "en"
baseURL = 'https://translate.google.com/translate_a/single?client=webapp&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw' \
	'&dt=rm&dt=ss&dt=t'

# translate a string
if inputString:
	translate_string()
else:
	translate_file()
