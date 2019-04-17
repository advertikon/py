# -*- coding: utf-8 -*-
import sqlite3


class DaylyPipeline(object):
    def open_spider(self, spider):
        self.connection = sqlite3.connect( 'storage.db' )
        self.cursor = self.connection.cursor()
        self.cursor.execute(
        	'''create table if not exists dayly (
        		code text,
        		date text,
				installations integer,
				rating real,
				voters_count integer,
				price text,
				UNIQUE( code, date )
        	)''');

    def close_spider(self, spider):
        self.connection.close()

    def process_item(self, item, spider):
        self.cursor.execute( """insert or replace into dayly values (
        		?,
        		date('now'),
        		?,
        		?,
        		?,
        		?
        	)""", (
        		item.get( 'code' ),
				item.get( 'installations' ),
				item.get( 'rating' ),
				item.get( 'voters_count' ),
				item.get( 'price' )
        	) )

        self.connection.commit()

        return item
