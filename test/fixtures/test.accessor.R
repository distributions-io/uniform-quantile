options( digits = 16 );
library( jsonlite );


a = -10
b = 10
probs = seq( 0, 1, 0.1 )
y = qunif( probs, a, b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
