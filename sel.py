from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get( "https://www.copart.com" )

try:
	element = WebDriverWait( driver, 5 ).until( EC.title_contains( "Copart" ) )

	for c in driver.get_cookies():
		print( c.get( "name" ), c.get( "value" ) )
finally:
	driver.quit()