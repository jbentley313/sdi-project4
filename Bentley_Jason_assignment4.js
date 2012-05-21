//alert("JavaScript works!");

// Assignment: Project 4
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 4: Library

var jasLib = (function() {
	var phoneValidate = function (phoneString) {
	 	var phoneRE =  /^((\+?1-)?\d\d\d-)?\d\d\d-\d\d\d\d$/;
	 	if (phoneRE.test(phoneString)) {
	 	return true;
		 } else {
	 	return false;
		}		
	};
	var emailValidate =function (emailString) {
		var emailRE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (emailRE.test(emailString)) {
			return true;
		} else {
			return false;
		}
	};
	var urlValidate = function (urlString) {
		var urlRE = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s&lt;&gt;\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
		if (urlRE.test(urlString)) {
			return true;
		} else {
			return false;
		}
	};
	var stringToNumber = function (numString) {
		return parseFloat(numString);
	};

	return {
			phoneValidate: phoneValidate,
			emailValidate: emailValidate,
			urlValidate: urlValidate,
			stringToNumber: stringToNumber
	};	
}());

var jlib = jasLib;
console.log(jasLib.phoneValidate("333-444-4444"));
console.log(jlib.phoneValidate("333-324-2323"));
console.log(jlib.emailValidate("jbae@fullsail.edu"));
console.log(jlib.urlValidate("https://www.this.com"));
console.log(jlib.stringToNumber("452"));














// 	var emailValidate = function (emailString) {
// 		var emailRE
// 	}


// var checkPhone = phoneValidate("317-298-9930");
// console.log(checkPhone);