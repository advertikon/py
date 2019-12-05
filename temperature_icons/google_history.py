#!/usr/bin/python3
import csv
import getopt
import os
import random
import sys
import time
from lxml import etree

import requests
from stem import Signal
from stem.control import Controller
from fake_useragent import UserAgent

from htmldom import htmldom

sourceFile = None
sourceUrl = None
verbose = False
showLibraries = False
show_rating = False
baseUrl = "https://www.appbrain.com/app/"
startTime = time.time()


def print_usage():
	print("Usage: ")
	print("Show PlayMarket App history\nFirst argument is app ID")
	print("-i - app ID")
	print("-f - CSV file to read IDs from")
	print("-l - show libraries")
	print("-r - show rating")
	print("-v - verbose")
	print("-h - usage")


def process_arguments():
	global sourceFile
	global sourceUrl
	global verbose
	global showLibraries
	global show_rating

	try:
		opt, args = getopt.getopt(sys.argv[1:], 'vhi:f:lr', [])
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
		elif o == '-l':
			showLibraries = True
		elif o == '-r':
			show_rating = True
		elif o == "-f":
			if not os.path.isfile(v):
				sys.stderr.write("{} is not a file\n".format(v))
				sys.exit(1)

			sourceFile = v

	if not sourceUrl and not sourceFile:
		sys.stderr.write("Source required\n")
		sys.exit(1)


def print_item(id, name="None", position="None"):
	url = '{}{}'.format(baseUrl, id)
	html = read_site(url)
	dom = htmldom.HtmlDom()
	dom = dom.createDom(html)
	wrapper = dom.find(".app-changelog")
	xml = etree.HTML(html)

	print("{} / {} / {}".format(id, name, position))

	for li in wrapper.find("li"):
		date = li.find(".app-changelog-date").text().strip()
		description = li.find(".app-changelog-description").text().strip()

		if not verbose and description.startswith("Version"):
			continue

		print('{:12} - {}'.format(date, description))

	if showLibraries:
		print("")
		libs = []

		for lib in dom.find(".app-library-item"):
			libs.append(lib.text().strip())

		for i in range(0, len(libs)):
			if libs[i] in ["libgdx", "Unity 3D", "Cocos2D-X", "Godot", "GameSalad", "Cocos2D", "Gamemaker: Studio", "AndEngine"]:
				libs[i] = "\033[32m" + libs[i] + "\033[0m"

		print("Libraries:", ", ".join(libs))

	if show_rating:
		print("")
		print('{:5}{:15}{:10}{:10}'.format("Rank", "Country", "Category", "List"))

		for rank_line in xml.findall(".//table/tr"):
			rank = rank_line[0].text
			country = rank_line[1].find("a").text
			category = rank_line[2].text
			listt = rank_line[3].text

			print('{:5}{:15}{:10}{:10}'.format(rank, country, category, listt))

	print("")


def print_all(file):
	print("Printing all...")
	firstLine = True

	with open(file, newline='') as f:
		data = csv.reader(f, delimiter='\t', quotechar='"')

		for row in data:
			if firstLine:  # skip header
				firstLine = False
				continue

			print_item(row[9], row[1], row[0])

			wait = random.uniform(1, 120)
			time.sleep(wait)


def read_site(url):
	global startTime

	proxies = {
		'http': 'socks5://127.0.0.1:9050',
		'https': 'socks5://127.0.0.1:9050'
	}

	proxies = {}
	headers = {'User-Agent': UserAgent().random}
	request = requests.get(url, proxies=proxies, headers=headers)

	print('Time: {:.1f} min'.format((time.time() - startTime) / 60))

	if 403 == request.status_code:
		print("Forbidden. Fusk")
		sys.exit(0)
	elif 429 == request.status_code:
		print("They got me....")
		sys.exit(0)
	elif 200 != request.status_code:
		print(request.status_code, request.reason)
		print(request.text)

	return request.text


def get_new_ip():
	with Controller.from_port(port=9051) as c:
		c.authenticate()
		c.signal(Signal.NEWNYM)


########################################################################################################################

process_arguments()

if sourceFile:
	print_all(sourceFile)

if sourceUrl:
	print_item(sourceUrl)
