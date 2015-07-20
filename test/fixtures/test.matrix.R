options( digits = 16 );
library( jsonlite );

a = 0
b = 1
probs = 0:24 / 25
y = qunif( probs, a, b )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
