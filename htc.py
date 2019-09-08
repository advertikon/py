import urllib.request
import time

apis = {
	'location_autocomplete':       '{host}/locations/v1/cities/autocomplete',
	'location_city_neighbouring':  '{host}/locations/v1/cities/neighbors/{locationKey}',
	'location_information':        '{host}/locations/v1/{locationKey}',
	'location_text_search':        '{host}/locations/v1/search&q=lon',
	'location_list':               '{host}/locations/v1/adminareas/UA',
	'forecast_dayly_1_day':        '{host}/forecasts/v1/daily/1day/{locationKey}',
	'forecast_dayly_5_day':        '{host}/forecasts/v1/daily/5day/{locationKey}',
	'forecast_dayly_10_day':       '{host}/forecasts/v1/daily/10day/{locationKey}',
	'forecast_dayly_15_day':       '{host}/forecasts/v1/daily/15day/{locationKey}',
	'forecasts_hourly_1hour':      '{host}/forecasts/v1/hourly/1hour/{locationKey}',
	'forecasts_hourly_12hour':     '{host}/forecasts/v1/hourly/12hour/{locationKey}',
	'forecasts_hourly_24hour':     '{host}/forecasts/v1/hourly/24hour/{locationKey}',
	'forecasts_hourly_72hour':     '{host}/forecasts/v1/hourly/72hour/{locationKey}',
	'forecasts_hourly_120hour':    '{host}/forecasts/v1/hourly/120hour/{locationKey}',
	'current_condition':           '{host}/currentconditions/v1/{locationKey}',
	'top_sites':                   '{host}/currentconditions/v1/topcities/50',
	'historical_condition_6h':     '{host}/currentconditions/v1/{locationKey}/historical',
	'historical_condition_24h':    '{host}/currentconditions/v1/{locationKey}/historical/24',
	'indices_group_1day':          '{host}/indices/v1/daily/1day/{locationKey}/groups/1',
	'indices_index_1day':          '{host}/indices/v1/daily/1day/{locationKey}/1',
	'indices_list_1day':           '{host}/indices/v1/daily/1day/{locationKey}',
	'indices_group_5day':          '{host}/indices/v1/daily/5day/{locationKey}/groups/1',
	'indices_index_5day':          '{host}/indices/v1/daily/5day/{locationKey}/1',
	'indices_list_5day':           '{host}/indices/v1/daily/5day/{locationKey}',
	'indices_group_10day':         '{host}/indices/v1/daily/10day/{locationKey}/groups/1',
	'indices_index_10day':         '{host}/indices/v1/daily/10day/{locationKey}/1',
	'indices_list_10day':          '{host}/indices/v1/daily/10day/{locationKey}',
	'indices_group_15day':         '{host}/indices/v1/daily/15day/{locationKey}/groups/1',
	'indices_index_15day':         '{host}/indices/v1/daily/15day/{locationKey}/1',
	'indices_list_15day':          '{host}/indices/v1/daily/15day/{locationKey}',
	'indices_list_dayly':          '{host}/indices/v1/daily',
	'indices_list_index_group':    '{host}/indices/v1/daily/groups',
	'indices_list_index_in_group': '{host}/indices/v1/daily/groups/1',
	'indices_medatdata_index':     '{host}/indices/v1/daily/1',
	'alarm_1day':                  '{host}/alarms/v1/1day/{locationKey}',
	'alarm_5day':                  '{host}/alarms/v1/5day/{locationKey}',
	'alarm_10day':                 '{host}/alarms/v1/10day/{locationKey}',
	'alarm_15day':                 '{host}/alarms/v1/15day/{locationKey}',
	'alerts':                      '{host}/alerts/v1/{locationKey}',
	'imagery 480x480':             '{host}/imagery/v1/maps/radsat/480X480/{locationKey}',
	'imagery 640x480':             '{host}/imagery/v1/maps/radsat/640X480/{locationKey}',
	'imagery 1024x1024':           '{host}/imagery/v1/maps/radsat/1024X1024/{locationKey}',
	'tropical_storms_goverment':   '{host}/tropical/v1/gov/storms/active',
	'translation_languages_list':  '{host}/translations/v1/languages',
	'translation_groups':          '{host}/translations/v1/groups',
	'translation_group_list':      '{host}/translations/v1/groups/1',
}

keys = {
	'accuweather': 'srRLeAmTroxPinDG8Aus3Ikl6tLGJd94',
	'asus':        'a33466bfa5b24f9f82aa7cf62d482f67',
	'go weather':  '1726cc2d792447b6bd7ca2f00b1344f7',
	'htc':         'c93f47e94a7243e3a3eb028fdbb6fbc0',

}

host = 'http://api.accuweather.com'
fcolw = 37
colw = 15

print( '{:{fc}}{:{w}}{:{w}}{:{w}}{:{w}}'.format( '', *keys, w = colw, fc = fcolw ) )

for ak in apis.keys():
	url = apis[ ak ].replace( '{host}', host )
	url = url.replace( '{locationKey}', '326514' )
	res = []
	r = ''
	repeat = 0

	for k in keys.values():
		url_to_go = '{}?apikey={}'.format( url, k )

		while True:
			try:
				r = urllib.request.urlopen(	url_to_go )
				res.append( "YES" )
				repeat = 0

			except urllib.error.HTTPError as e:
				res.append( "No" )

				if 403 != e.code:
					print( e.code )

			except urllib.error.URLError:
				if repeat < 5:
					wait = 1 << repeat
					repeat += 1
					print( "Connection error. Wait {} sec. to reconnect".format( wait ) )
					time.sleep( wait )
					continue
				else:
					print( "Connection error. Quit" )
			break


	print( '{:{fc}}{:{w}}{:{w}}{:{w}}{:{w}}'.format( '{} ({:,d})'.format( ak, len( r.read() ) ), *res, w = colw, fc = fcolw ) )