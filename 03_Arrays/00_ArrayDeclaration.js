// There are two ways to declare an array in Js

var states = ["Raj", "Bihar", "Telangana"];

var countries = new Array("India", "USA", 'Russia');

console.log(states);
console.log(countries);

// We can access indivisual elements of an array using indices 

console.log(states[1], states[2]);
console.log(countries[0], countries[2]);


// Push() - Inserts an element in array at the end 
countries.push("Japan"); // add japan to the end ;
// Js supports different data types to be stored in a single array.
countries.push(43);
console.log(countries);


// pop() - Removes an element from the end of the array
countries.pop();
console.log(countries);

// To remove and add elements from the start of an array we use 

// shift - Removes the first element and shifts all the element to left 
countries.shift();
console.log(countries);

// unshift - Inserts an element at the beginning of the array thus shifts
// rest of the elements to the right.

countries.unshift("India");
console.log(countries);

// Now indexof - is used to search for an element in the array
// It takes a target input and return the index of target 
// If the target is not present in the array it returns -1 ;

console.log(countries.indexOf("India")); // prints 0 ;
console.log(countries.indexOf("Ind")); // prints -1, since Ind is not present ;

// Arrays in Js is very powerful 

// To create an array out of String 
var Arr = Array.from("Kumar");
console.log(Arr);

// Read MDN documentation 