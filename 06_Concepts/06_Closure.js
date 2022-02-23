// Closure 

function init() {
    var fullName = "Shubhansu Kumar";
    function sayHello() {
        console.log(fullName);
    }
    sayHello();
}

init();

// Typically once the context's purpose is fulfilled, It's cleared from the
// memory and all the variables and functions are freed.

// Returning a refrence 
function init1() {
    var fullName = "Kumar";
    function sayHello() {
        console.log(fullName);
    }
    return sayHello;
}

// When we return a refrence of variable or function, It's not cleared 
// with the context. So here, the say hello is returned by init1 

var val = init1(); // returns the refrence to the function which is stored in val 

// we can execute val 
val();

// More example of closure 

function addNumber(a) {
    return function (b) {
        return a + b;
    };
};

var sum = addNumber(5);
console.log(sum(6));

// Or we can use a one liner 
console.log(addNumber(5)(2)) ;