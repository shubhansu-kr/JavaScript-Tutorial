// var keyword is used to declare a variable in js 

var fullName = "Shubhansu Kumar Singh";
// It's a good practice to use semicolon at the end of a line.

// There are differnt practices for declaring a var name

// fullName   --> Camel Case (Preferred)
// full-name  --> Snake Case 
// full_name  --> Snake Case 
// FullName   --> Not recommended to use uppercase for vars

// JS picks the data type automatically so, These are completely different

var lengthI = 35; // Integer 
var lengthS = "35" ; // String

// We can declare a var and initialise them later also 

var paymentMode;
console.log(paymentMode); // Prints Undefined 

paymentMode = "UPI" ;
console.log(paymentMode); // Prints UPI
