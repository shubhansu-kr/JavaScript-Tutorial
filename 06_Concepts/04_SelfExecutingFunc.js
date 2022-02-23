// Call back funtions call themselves right after declaration , 
// Similarly IIFE are also used to as self call function.

// Normal function declaration,
function sayHello() {
    console.log("Hello there !");
};

// Calling the function to execute the code 
sayHello();

// IIFE 
(function () {
    console.log("Hello !");
})();

// () => (console.log("Hello Again"));
