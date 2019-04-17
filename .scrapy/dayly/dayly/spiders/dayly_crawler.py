from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.selector import HtmlXPathSelector
from dayly.items import DaylyItem
import urlparse
import re
from datetime import datetime
import csv
import glob
import sys
import pprint
import os
import dayly
import scrapy
import pprint

# sys.path.append( os.getcwd() + "/" )
# print( sys.version_info )

# pprint.pprint( sys.path )
# print( __name__ )
# print( dir( dayly ) )

class DaylySpider(CrawlSpider):
	name = "dayly"
	
	def start_requests(self):
		for file in glob.glob( "files/*.csv" ):
			with open( file, "rU" ) as f:
				reader = csv.DictReader( f )
				
				for line in reader:
					# pprint.pprint( line )
					yield scrapy.Request( url=line['url'] )

	
	def parse(self,response):
		item = DaylyItem()
		list = response.css('body div div c-wiz div div div div div c-wiz div.W4P4ne div.hAyfc' )

		for l in list:
			key = l.css( '.BgcNfc::text' ).get().lower()
			value = l.css( '.htlgb::text' ).get()
			# self.logger.error( key )
			# self.logger.error( value )

			if key == 'updated':
				updated_date = datetime.strptime( value, '%B %d, %Y' )
				item['updated'] = updated_date.strftime( '%Y-%m-%d' )
			elif key == 'size':
				item['size'] = value
			elif key == 'installs':
				item['installations'] = value.strip( '+' ).replace( ',', '' )
			elif key == 'current version':
				item['current_version'] = value
			elif key == 'requires android':
				item['required_android'] = value
			elif key == 'content rating':
				item['content_rating'] = value
			elif key == 'interactive elements':
				item['interactive_elements'] = value
			elif key == 'in-app products':
				item['in_app_purchases'] = value
			elif key == 'offered by':
				item['offered_by'] = value
			elif key == 'developer':
				item['developer'] = l.css( 'div:nth-child(2) > a::text' ).get()

		rating_string = response.css('c-wiz c-wiz div div div div div div c-wiz div div[aria-label]::attr(aria-label)').get( '' )
		match = re.match( r'.*?(\d+\.\d+).*?', rating_string )
		item["rating"] = ''
		item['voters_count'] = response.css( '#fcxH9b > div.WpDbMd > c-wiz > div > div.ZfcPIb > div > div.JNury.Ekdcne > div > c-wiz:nth-child(1) > c-wiz:nth-child(1) > div > div.D0ZKYe > div > div.sIskre > div > div.dNLKff > c-wiz > span > span:nth-child(1)::text').get()

		if match:
			item["rating"] = match.group( 1 )

		# item['description'] = r'\n'.join( response.css('body #fcxH9b > div.WpDbMd > c-wiz > div > div.ZfcPIb > div > div.JNury.Ekdcne > div > c-wiz:nth-child(1) > c-wiz:nth-child(3) > div > div.W4P4ne > div.PHBdkd > div.DWPxHb > content > div::text').getall() )
		item['category'] = response.css( '#fcxH9b > div.WpDbMd > c-wiz > div > div.ZfcPIb > div > div.JNury.Ekdcne > div > c-wiz:nth-child(1) > c-wiz:nth-child(1) > div > div.D0ZKYe > div > div.sIskre > div > div.ZVWMWc > div:nth-child(1) > span:nth-child(2) > a::text').get()
		item['name'] = response.css( '#fcxH9b > div.WpDbMd > c-wiz > div > div.ZfcPIb > div > div.JNury.Ekdcne > div > c-wiz:nth-child(1) > c-wiz:nth-child(1) > div > div.D0ZKYe > div > div.sIskre > c-wiz:nth-child(1) > h1 > span::text').get()

		priceStr = response.css('button meta[itemprop="price"]::attr(content)').get()
		item['price'] = ''

		if priceStr:
			pMatch = re.match( r'.*?(\d+\.\d+).*?', priceStr )
			item["price"] = pMatch.group( 1 ) if pMatch else priceStr

		item['url']   = response.url
		item['code']  = ''

		for q in urlparse.parse_qsl( urlparse.urlparse( response.url )[ 4 ] ):
			if q[ 0 ] == 'id':
				item['code'] = q[ 1 ]

		return item