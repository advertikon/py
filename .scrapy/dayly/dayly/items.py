# -*- coding: utf-8 -*-
import scrapy

class DaylyItem(scrapy.Item):
	code                 = scrapy.Field()
	updated              = scrapy.Field()
	size                 = scrapy.Field()
	installations        = scrapy.Field()
	current_version      = scrapy.Field()
	required_android     = scrapy.Field()
	content_rating       = scrapy.Field()
	interactive_elements = scrapy.Field()
	in_app_purchases     = scrapy.Field()
	offered_by           = scrapy.Field()
	developer            = scrapy.Field()
	rating               = scrapy.Field()
	voters_count         = scrapy.Field()
	description          = scrapy.Field()
	category             = scrapy.Field()
	name                 = scrapy.Field()
	price                = scrapy.Field()
	url                  = scrapy.Field()
