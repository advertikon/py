#!/usr/bin/python3
import csv
import getopt
import os
import random
import sys
import time

import requests
from stem import Signal
from stem.control import Controller
from fake_useragent import UserAgent

from htmldom import htmldom

sourceFile = None
sourceUrl = None
verbose = False
baseUrl = "https://www.appbrain.com/app/"


def print_usage():
	print("Usage: ")
	print("Show PlayMarket App history\nFirst argument is app ID")
	print( "-i - app ID" )
	print( "-f - CSV file to read IDs from" )
	print("-v - verbose")
	print("-h - usage")


def process_arguments():
	global sourceFile
	global sourceUrl
	global verbose

	try:
		opt, args = getopt.getopt(sys.argv[1:], 'vhi:f:', [])
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
		elif o == "-i":
			sourceUrl = v
		elif o == "-f":
			if not os.path.isfile( v ):
				sys.stderr.write( "{} is not a file\n".format( v ) )
				sys.exit( 1 )

			sourceFile = v

	if not sourceUrl and not sourceFile:
		sys.stderr.write( "Source required\n" )
		sys.exit( 1 )


def print_item( id, name = "None", position="None" ):
	url = '{}{}'.format(baseUrl, id)
	html = read_site( url )
	dom = htmldom.HtmlDom()
	dom = dom.createDom( html )
	wrapper = dom.find(".app-changelog")

	print( "{} / {} / {}".format( id, name, position ) )

	for li in wrapper.find("li"):
		date = li.find(".app-changelog-date").text().strip()
		description = li.find(".app-changelog-description").text().strip()

		if not verbose and description.startswith("Version"):
			continue

		print('{:12} - {}'.format(date, description) )

	print( "" )


def print_all( file ):
	print("Printing all...")
	firstLine = True

	with open( file, newline='' ) as f:
		data = csv.reader(f, delimiter='\t', quotechar='"')

		for row in data:
			if firstLine: # skip header
				firstLine = False
				continue

			print_item( row[ 9 ], row[ 1 ], row[ 0 ] )

			wait = random.uniform( 1, 20 )
			time.sleep(wait)

def read_site( url ):
	proxies = {
		'http': 'socks5://127.0.0.1:9050',
		'https': 'socks5://127.0.0.1:9050'
	}

	# proxies = {}
	headers = {'User-Agent': UserAgent().random}
	html = requests.get( url, proxies=proxies, headers=headers ).text
	# print( html )
	return html

def get_new_ip():
	with Controller.from_port(port=9051) as c:
		c.authenticate()
		c.signal(Signal.NEWNYM)

########################################################################################################################

process_arguments()

get_new_ip()
print( read_site( 'https://ident.me' ) )

if sourceFile:
	print_all( sourceFile )

if sourceUrl:
	print_item( sourceUrl )


