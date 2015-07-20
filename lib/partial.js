'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( a, b )
*	Partially applies minimum value `a` and maximum value `b` and returns a function for evaluating the quantile function for a Uniform distribution.
*
* @param {Number} a - minimum value
* @param {Number} b - maximum value
* @returns {Function} quantile function
*/
function partial( a, b ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Uniform distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
