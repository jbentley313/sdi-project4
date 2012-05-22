//alert("JavaScript works!");

// Assignment: Project 4
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 4: Library

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
	//  [a-z]{2,6} is the last part of the url that has at least 2 characters, but no more than 6. $ is end anchor, /i makes it non case sensitive.
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
	var moneyFormat = function (num) {
	return  num.toFixed(2);
	};


// 	var getDateDiff = function(date1, date2) {
//     var oneDay = 24*60*60*1000; 
// 	var firstDate = new Date(date1);
// 	var secondDate = new Date(date2);

// var days = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
// document.write("Number of days: "+days);
// }
		
	

	return {
			"phoneValidate": phoneValidate,
			"emailValidate": emailValidate,
			"urlValidate": urlValidate,
			"stringToNumber": stringToNumber,
			"moneyFormat": moneyFormat
			// getDateDiff: getDateDiff
			
	};	
};

var jlib = new jasLib();
console.log(jlib.phoneValidate("333-334-2323"));
console.log(jlib.emailValidate("jbae@fullsail.edu"));
console.log(jlib.urlValidate("www.sitename.com"));
console.log(jlib.stringToNumber("452"));
console.log(jlib.moneyFormat(20.1));
// console.log(jlib.getDateDiff());















// 	var emailValidate = function (emailString) {
// 		var emailRE
// 	}


// var checkPhone = phoneValidate("317-298-9930");
// console.log(checkPhone);