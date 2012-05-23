
var jasLib = function() {
	// Phone Number Validator 
	// RegEx /^ is the beginning anchor of the expression
	//		\(? means an opening bracket may be present 0 to 1 time, the backslash escapes the "(" so it is a literal "(". 
	//  	[0-9]{3} means must match a number 0-9 exactly 3 times.
	//		\)? means match the literal ")", once again escaping the ")" to treat the closing parenthesis literally.
	//		[-. ]? means match one seperator, either "-" or "." or " ", 0 to 1 time.
	//		The rest repeats until [0-9]{4} which means match a number 0-9 exactly 4 times, the $/ is the end anchor
	var phoneValidate = function (phoneString) {
		var phoneRE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	 	if (phoneRE.test(phoneString)) {
	 	return true;
		 } else {
	 	return false;
		}		
	};

	// Email Validator
	// RegEx /^ is the beginning anchor of the expression
	//		 ([a-zA-Z0-9_\.\-])+ means in the first group, lowercase a-z and uppercase A-Z and 0-9 underscores and periods are matched one or more times.
	//		 \@ means match the "@" symbol.  The ending group with {2,4} matches end characters at least 2 times, but no more than 6. 
	// side-note, I chose then end to be no more than 6 because I just found out "museum" is a domain ending. That way, joe@some.museum will be able to register.	
	var emailValidate =function (emailString) {
		var emailRE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
		if (emailRE.test(emailString)) {
			return true;
		} else {
			return false;
		}
	};

	// URL Validator
	// RegEx /^ is the beginning anchor of the expression.
	// (?:) means this block not be a backreference, (S)? means the s can happen 0 to 1 time. \/\/ is "//" escaped.
	//  \w is equal to [a-zA-Z0-9_] (any number or letter)   + means previous can happen one or more times. 
	//  [a-z]{2,6} is the last part of the url (domain) that has at least 2 characters, but no more than 6. $ is end anchor, /i makes it non case sensitive.
	//  This validator will correctly validate URLs like mail.fullsail.edu
	var urlValidate = function (urlString) {
		var urlRE = /^(?:http(s)?:\/\/)?(?:[\w-]+\.)+[a-z]{2,6}$/i;
		if (urlRE.test(urlString)) {
			return true;
		} else {
			return false;
		}
	};

	// String To Number
	var stringToNumber = function (numString) {
		return parseFloat(numString);
	};

	// Format Number (to 2 decimal places)
	var moneyFormat = function (num) {
	return  num.toFixed(2);
	};

	// Array of Objects Sort
	var  sortObjects = function(array, key) {
		for (var i = 0; i < array.length; i++) {
		var Value = array[i][key];
		var Elem = array[i];
		var j = i - 1;
		while ((j >= 0) && (array[j][key] > Value)) {
		array[j + 1] = array[j];
		j--;
		}
		array[j + 1] = Elem;
		}
		return array;
	};

	return {
			"phoneValidate": phoneValidate,
			"emailValidate": emailValidate,
			"urlValidate": urlValidate,
			"stringToNumber": stringToNumber,
			"moneyFormat": moneyFormat,
			"sortObjects": sortObjects
			
	};	
};
