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
	// var emailValidate =function (emailString) {
	// 	var emailRE = 
	// };

	return {
			phoneValidate: phoneValidate
	};	
}());

var jlib = jasLib;
console.log(jasLib.phoneValidate("333-444-4444"));
console.log(jlib.phoneValidate("333-324-2323"));














// 	var emailValidate = function (emailString) {
// 		var emailRE
// 	}


// var checkPhone = phoneValidate("317-298-9930");
// console.log(checkPhone);