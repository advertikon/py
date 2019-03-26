# -*- coding: utf-8 -*-
import sqlite3


class GooglePipeline(object):
    def open_spider(self, spider):
        self.connection = sqlite3.connect( 'storage.db' )
        self.cursor = self.connection.cursor()
        self.cursor.execute(
        	'''create table if not exists apps (
        		code text primary key,
        		updated text,
				size text,
				installations integer,
				current_version text,
				required_android text,
				content_rating text,
				interactive_elements text,
				in_app_purchases text,
				offered_by text,
				developer text,
				rating real,
				voters_count integer,
				-- description text,
				category text,
				name text,
				price text,
				url text
        	)''');

    def close_spider(self, spider):
        self.connection.close()

    def process_item(self, item, spider):
        self.cursor.execute( """replace into apps values (
        		?,
        		?, --Link=:Link,
				?, --Item_name=:Item_name,
				?, --Updated=:Updated,
				?, --Author=:Author,
				?, --Filesize=:Filesize,
				?, --Downloads=:Downloads,
				?, --Version=:Version,
				?, --Compatibility=:Compatibility,
				?, --Content_rating=:Content_rating,
				?, --Author_link=:Author_link,
				?, --Genre=:Genre,
				?, --Price=:Price,
				-- ?, --Rating_value=:Rating_value,
				?, --Review_number=:Review_number,
				?, --Description=:Description,
				?, --IAP=:IAP,
				? --Developer_badge=:Developer_badge
        	)""", (
        		item.get( 'code' ),
        		item.get( 'updated' ),
				item.get( 'size' ),
				item.get( 'installations' ),
				item.get( 'current_version' ),
				item.get( 'required_android' ),
				item.get( 'content_rating' ),
				item.get( 'interactive_elements' ),
				item.get( 'in_app_purchases' ),
				item.get( 'offered_by' ),
				item.get( 'developer' ),
				item.get( 'rating' ),
				item.get( 'voters_count' ),
				# item.get( 'description' ),
				item.get( 'category' ),
				item.get( 'name' ),
				item.get( 'price' ),
				item.get( 'url' )
        	) )

        self.connection.commit()

        return item
