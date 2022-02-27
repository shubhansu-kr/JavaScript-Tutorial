// console.log(name);  Gives an undefined output 

var name = "shubh";

// console.log(firstName); // Gives an error since first name is not yet defined 
let firstName = "Shubhansu";

// var vs let
// Let gives an error output while var gives undefined 

if (true) {
    var fullName = "Shubhansu kumar Singh";
    let lastName = "Kumar";
}

console.log(fullName); // Prints full name 
// In Js, {} are not considered as scope, methods are.

console.log(lastName); // Out of scope error 

// Let vs var 
// let follows the curly bracket scope protocols 
// let and var is used to switch between scoping rules 
