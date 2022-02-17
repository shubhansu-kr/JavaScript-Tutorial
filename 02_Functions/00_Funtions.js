// Functions are blocks of code which is sperated from the main file 
// to reuse the code multiple times .

// Syntax to declare a funtion 
// funtion [funtion_name] () {
// Your code goes here 
// }

// Syntax to call a funtion 
// [function_name] () ;

// Syntax to refer a function 
// [function_name] ;

var user = "Shubhansu-kr"

// Declaration 
function greet() {
    console.log("hello !");
}

// Calling 
greet();
greet();

// Passing a value 
function greetUser(name) {
    console.log("Hello !" + name); // + does not append a space after a string 
    console.log("Hello !", name); // , does append a space after the name 
    console.log(`Back tick is always preferrd to print the lines `);
    console.log(`It gives clarity to the code `);
    console.log(`We can use ${name} to insert variables too `);
}

greetUser(user);
greetUser("Hitesh Chaudhry"); // A constant can also be passed 

// Returning a val in function 
function sum(a, b) {
    return a + b;
}

var result = sum(3, 5);
console.log(result);
