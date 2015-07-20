options( digits = 16 );
library( jsonlite );


a = -100
b = 100
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qunif( probs, a, b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
