// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	// Create an output array
	var outArray = [];

	// Helper function that takes array of DOM elements as argument
	function getHelper(elements) {
		// iterate through array of DOM elements
		for (var k in elements) {
			// check if element matches designated className
			if (elements[k].classList !== undefined && elements[k].classList.contains(className)) {
				// if true, push element to the output array
				outArray.push(elements[k]);
			}
			// check if element has children
			if (elements[k].childNodes !== undefined && elements[k].childNodes.length > 0) {
				// if true, recursively call helper function on children elements array
				getHelper(elements[k].childNodes);
			}
		}
	}

	// Check if body matches the designated className
	if (document.body.classList !== undefined && document.body.classList.contains(className)) {
		// if true, push body to output array
		outArray.push(document.body);
	}

	// Check if body has children
	if (document.body.childNodes !== undefined && document.body.childNodes.length > 0) {
		// if true, pass into helper function
		getHelper(document.body.childNodes);
	}

	// Return output array
	return outArray;
};
