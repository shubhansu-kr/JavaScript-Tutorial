// Scope of a variable and context stacking 

function init() {
    var fullName = "Shubhansu Kumar";
    function sayHello() {
        console.log(fullName);
    }
    sayHello();
}

init();

// Compiler does not know what full name is 
// console.log(fullName); 