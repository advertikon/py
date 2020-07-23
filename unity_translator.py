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
from lxml import etree

from fake_headers import Headers

cookieJar = http.cookiejar.CookieJar()
cookieJar.clear()

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

# headers = {
# "Host": "translate.google.com",
# "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0",
# "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
# "Accept-Language": "en-US,en;q=0.5",
# "Accept-Encoding": "none",
# "Connection": "keep-alive"
# }

# header = Headers(headers=True)

languages = {
	'af': 'Afrikaans',
	'ar': 'Arabic',
	'eu': 'Basque',
	'be': 'Belarusian',
	'bg': 'Bulgarian',
	'ca': 'Catalan',
	'zh-cn': 'Chinese Simplified',
	'zh-tw': 'Chinese Traditional',
	'cs': 'Czech',
	'da': 'Danish',
	'nl': 'Dutch',
	'en': 'English',
	'et': 'Estonian',
	'fi': 'Finnish',
	'fr': 'French',
	'de': 'German',
	'el': 'Greek',
	'iw': 'Hebrew',
	'hu': 'Hungarian',
	'is': 'Icelandic',
	'id': 'Indonesian',
	'it': 'Italian',
	'ja': 'Japanese',
	'ko': 'Korean',
	'lv': 'Latvian',
	'lt': 'Lithuanian',
	'no': 'Norwegian',
	'pl': 'Polish',
	'pt': 'Portuguese',
	'ro': 'Romanian',
	'ru': 'Russian',
	'sr': 'Serbian',
	'sk': 'Slovak',
	'sl': 'Slovenian',
	'es': 'Spanish',
	'sv': 'Swedish',
	'th': 'Thai',
	'tr': 'Turkish',
	'uk': 'Ukrainian',
	'vi': 'Vietnamese'
}


def print_usage():
	print("Usage: ")
	print("Run int from a directory you need to create translations, eg app/src/main/res")
	print("-v - verbose")
	print("-d - dry run")
	print("-h - usage")


def process_arguments():
	global verbose
	global dryRun

	try:
		opt, args = getopt.getopt(sys.argv[1:], 'hvd',[] )

	except getopt.GetoptError as err:
		sys.stderr.write(str(err))
		print_usage()
		sys.exit(1)

	for o, v in opt:
		if o == "-h":
			print_usage()
			sys.exit(0)
		elif o == "-v":
			verbose = True
		elif o == '-d':
			dryRun = True

	if not fileName:
		sys.stderr.write("Source required\n")
		print_usage()
		sys.exit(1)


def collect_translations(file):
	words_list = {}

	if not os.path.isfile(file):
		return words_list

	with open(file, "r") as f:
		root = etree.fromstring(f.read())

		for string in root:
			if string.get("translatable") and "false" == string.get("translatable"):
				continue

			words_list[string.get('name')] = string.text

	return words_list


def translate_file():
	global languages
	global fileName
	global fromLanguage

	translations = collect_translations(fileName.format( fromLanguage ) )
	sys.stderr.write('Number of translations: {}\n'.format(len(translations)))

	for toL in languages:
		sys.stderr.write('Translation to {}\n'.format(toL))
		translate(toL, translations)


def translate(to_lang, translations):
	global baseURL
	global headers
	global cookieJar
	global fromLanguage
	global fileName
	# global header

	target_language = to_lang.split("-")[0]
	output = collect_translations(fileName.format(target_language))
	total_count = len(translations)
	count = 0

	for code, text in translations.items():
		if output.get(code):
			print_inline('{:.0%} Skipping translation for {}'.format(count / total_count, code))
			count += 1
			continue

		calls_control()
		query_values = {
			'sl': fromLanguage,
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
		opener = urllib.request.build_opener()#(urllib.request.HTTPCookieProcessor(cookieJar))
		response = opener.open(request)

		raw_response = response.read().decode("utf-8")
		json_response = json.loads(raw_response)
		translation = json_response[0][0][0].replace("'", "\\'")
		# translation = translation.lower()

		if text[0].isupper():
			translation = translation[0].upper() + translation[1:]

		output[code] = translation
		count += 1

	print("")
	save_translation(output, target_language)


def save_translation(words_list, language):
	global dryRun
	global fileName

	if dryRun:
		print(words_list)
		return

	root = etree.Element("resources")

	for translation_code, translation_string in words_list.items():
		item = etree.SubElement(root, 'string', name=translation_code)
		item.text = translation_string

	with open(fileName.format(language), "w") as f:
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


def check_cwd():
	global fromLanguage
	global fileName

	if not os.path.exists( fileName.format( fromLanguage ) ):
		pritn("Cannot find " + fileName.format( fromLanguage ) + " file" )
		sys.exit(0)


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
baseURL = 'https://translate.google.com/translate_a/single?client=webapp&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw' \
	'&dt=rm&dt=ss&dt=t'
fileName = "{}.xml"
verbose = False
callsPerMinute = 30
callsCount = 0
lastCallTime = 0
callsStart = time.clock()
unbuffered_out = None
dryRun = False
toLanguage = None
fromLanguage = "en"

terminal_rows, terminal_columns = os.popen('stty size', 'r').read().split()
terminal_columns = int(terminal_columns)

process_arguments()
check_cwd()
translate_file()
