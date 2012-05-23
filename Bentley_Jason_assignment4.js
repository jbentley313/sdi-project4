//alert("JavaScript works!");

// Assignment: Project 4
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 4: Library


var jlib = jasLib();

console.log(jlib.phoneValidate("333-334-2323"));
console.log(jlib.emailValidate("jbae@fullsail.edu"));
console.log(jlib.urlValidate("www.sitename.com"));
console.log(jlib.stringToNumber("452"));
console.log(jlib.moneyFormat(20.1));

var objs = [
{name:"Jason", age:33},
{name:"Acacia", age:32},
{name:"Teva", age:5}
];
 
console.log(jlib.sortObjects(objs,'name'));













