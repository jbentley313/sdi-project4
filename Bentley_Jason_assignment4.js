//alert("JavaScript works!");

// Assignment: Project 4
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 4: Library


var jlib = jasLib();

//Test: Phone validator 
console.log(jlib.phoneValidate("333-334-2323"));

//Test: Email validator 
console.log(jlib.emailValidate("jbae@fullsail.edu"));

//Test: URL validator 
console.log(jlib.urlValidate("www.sitename.com"));

//Test: String to Number 
console.log(jlib.stringToNumber("452"));

//Test: Money Format (2 decimal places) 
console.log(jlib.moneyFormat(20.1));

//Test: Array of Objects sorter 
var objs = [
{name:"Jason", age:33},
{name:"Acacia", age:32},
{name:"Teva", age:5}
];
console.log(jlib.sortObjects(objs,"age"));

//Test: Difference Between Two Dates (in days)
var firstDate = "1/03/2012";
var secondDate = "2/14/2012";
console.log(jlib.daysBetweenDates(firstDate,secondDate));













