import random

t = [1,2,3,4,5,6,7,8,9,10]
o = []

for i in range( 0, 10 ):
	o.append( random.choice( t ) )

for i in t:
	s = 0

	for z in o:
		if z == i:
			s += 1
	p = ( float( s ) / len( o ) ) * 100
	print( '{}: {:.2f}%'.format(i, p ) )