// JS engine always has a global context 

greet();

function greet() {
    console.log("Hello JS!");
}

// There is no compilation error even though we are calling the function
// before defining it, It's because of the global context .
// funtion greet is already registered to the context , so if we run the
// code , Js knows where the definition resides.
// Thus it sucessfully runs the code.

var myName = "Shubhansu kumar";

if (myName == myName) {
    console.log("True");
}

// if (myName === globalThis.myName) {
//     console.log("True");
// }
// Also true, replace globalthis with the context keyword 


