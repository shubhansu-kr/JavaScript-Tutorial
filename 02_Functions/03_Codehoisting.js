// Global Context - keeps scanning the code and registers new variable and
// funcions. 

// Funciton declaration are snanned and made available 
// variable declaration are scanned and made undefined 

// when we a call a function or use a variable, Execution context comes 
// into play, does thier task and gets destroyed, Just like the stack memory 
// created while funtion calling in c++ ;

// Parse is used to convert data types 
var tip = parseInt("5");
console.log(tip); // prints num 5

tipper(5); // prints 10

function tipper(a) {
    var bill = parseInt(a); // to avoid data type conflicts 
    console.log(bill + 5);
}

tipper("5"); // prints 10 instead of 55 because we parsed the string into int

bigTipper(50); // Calls seemlessly, no errors 

function bigTipper(a) {
    var bill = parseInt(a); // to avoid data type conflicts 
    console.log(bill + 15);
}


// Now if we use variable funtion 

// midTipper(10); // Throws error, Since midTopper is not a 
// funtion rather is a var which is not registed as available in global
// context (Unlike normal functions).

var midTipper = function (a) {
    var bill = parseInt(a); // to avoid data type conflicts 
    console.log(bill + 15);
};

midTipper(10); // prints 25

// Lets see one more example 

console.log(myName); // Prints undifined, Since var in global context is undifined  

var myName = "Shubh";
console.log(myName); //  Prints Shubh 

function sayMyName() {
    var myName = "H ";
    console.log(myName); //  Prints H 
}

sayMyName();
console.log(myName); //  Prints Shubh 
