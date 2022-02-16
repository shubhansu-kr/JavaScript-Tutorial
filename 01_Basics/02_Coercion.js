// Falsy values 

// undefined 
// null
// 0
// ''
// NaN

var login;        // undefined
var temp = null;  // Nothing  
var temo = 0;     // zero 
var name = '';    // Empty string 
var roll = NaN;   // Not a number a

// Falsy values dont triger if cases 
// Everything other than these five value does 

// Coercion 

console.log(2 + 2);  // prints the sum 4  
console.log(2 + "2"); // prints 22 ; JS assumes that both of them are string 
// so appends 2 after 2 which makes 22 

login = "2";

if (login == 2) {
    console.log("OK Tested "); // Prints 
    // Js assumes if you are comparing a num to string, you must be going
    // for a loose check so passes the condition .
} 

if (login === 2) {
    console.log("OK Tested "); // Does not print 
    // Js assumes if you are using 3 equals , You want to compare the data type too
    // so rejects the unequal data type .
}
