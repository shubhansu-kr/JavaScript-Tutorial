// To import instances form different files , first you need to make the 
// file available for import
// module.exports = [] ;

// To import the file we have to use require method 

const Student = require("./05_Classes");

let ram = new Student("Ramesh", "ramesh@lco.in");

console.log(ram.getInfo());
