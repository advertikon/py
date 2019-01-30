import pprint
import sys

class Scope:
	namespace = None
	className = None
	scope     = None
	cursorRow = None
	errors    = None

	def __str__( self ):
		return "Cursor: %s\nNamespace: %s\nClass: %s\n%s" % ( self.cursorRow, self.namespace.name if self.namespace else "", \
			self.className.name if self.className else "", self.scope )

	def setNamespace( self, name ):
		self.namespace = name

	def setClass( self, name ):
		self.className = name

	def setScope( self, scope ):
		self.scope = scope

	def getScope( self ):
		return self.scope

	def setCursorRow( self, row ):
		self.cursorRow = row

	def check( self ):
		self.errors = ()
		self.checkInexistedVars()

		return self.errors;

	def checkInexistedVars( self ):
		pass

