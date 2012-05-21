//alert("JavaScript works!");

// Assignment: Project 4
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 4: Library


	var phoneValidate = function (phoneString) {
	 	var filter =  /^((\+?1-)?\d\d\d-)?\d\d\d-\d\d\d\d$/;
	 	if (filter.test(phoneString)) {
	 	return true;
		 } else {
	 	return false;
		}
	 	
};


var checkPhone = phoneValidate("317-298-9930");
console.log(checkPhone);