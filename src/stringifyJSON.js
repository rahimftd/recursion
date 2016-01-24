// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var strJSON = '';

	function stringifyHelper(obj) {
		if (typeof obj === "object" && obj !== null) {
			return stringifyJSON(obj);
		} else if (typeof obj === "string") {
			return'"' + obj + '"';
		} else if (typeof obj === "function" || obj === undefined) {
			return '';
		} else {
			return '' + obj;
		}
	}

	if (typeof obj === "object" && obj !== null) {
		for (var k in obj) {
			if (!(typeof obj[k] === "function" || obj[k] === undefined)) {
				if (!Array.isArray(obj)) {
					strJSON += '"' + k + '":' + stringifyHelper(obj[k]) + ',';
				} else {
					strJSON += stringifyHelper(obj[k]) + ',';
				}
			} 
		}

		if (Array.isArray(obj)) {
			strJSON = '[' + strJSON.slice(0, strJSON.length - 1) + ']';
		} else if (typeof obj === "object") {
			strJSON = '{' + strJSON.slice(0, strJSON.length - 1) + '}';
		}

		return strJSON;
	} else {
		return stringifyHelper(obj);
	}
};

