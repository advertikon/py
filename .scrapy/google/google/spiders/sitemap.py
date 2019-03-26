# -*- coding: utf-8 -*-
import scrapy
from datetime import datetime


class MySitemapSpider( scrapy.spiders.SitemapSpider ):
	name = 'sitemap'
 
	sitemap_urls = ['http://play.google.com/robots.txt']
	sitemap_urls = ['https://mkl.ua/sitemap.xml']
	sitemap_urls = ['https://play.google.com/sitemaps/play_sitemaps_2019-03-14_1552622507-53784-of-53785.xml.gz']

	# def sitemap_filter(self, entries):
	# 	for entry in entries:
	# 		date_time = datetime.strptime(entry['lastmod'], '%Y-%m-%d')
	# 		if date_time.year >= 2005:
	# 			yield entry

	def parse( self, response ):
		pass
