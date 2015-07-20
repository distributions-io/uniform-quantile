'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, a, b )
*	Evaluates the quantile function for a Uniform distribution with minimum value `a` and maximum value `b` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} a - minimum value
* @param {Number} b - maximum value
* @returns {Number} evaluated quantile function
*/
function quantile( p, a, b ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
