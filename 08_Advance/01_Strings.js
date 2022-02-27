var fullName = "Shubhansu \" This \" Kumar";

// Follow Standard practice -
// " " - For strings 
// '' - For char

// Backticks are knows as literals in JS - ` `
// Liteals are helpful when we want to add quotes without escaping 
// characters, or add variables and constants  

var firstName = `Shubhansu " This " `;

console.log(firstName);
console.log(fullName);

var combine = `${fullName} Singh`;
console.log(combine);

// Just like any other lang, We do have a lot of inbuilt functions 
// and methods to play around with strings 

// charAt(a) - Takes index as parameter and returns the char at the provided 
// index value 

console.log(combine.charAt(2));
console.log(combine.charAt(3));

// endsWith - Takes a char/string as parameter and check if the string ends with 
// that char or not (return true or false)

console.log(combine.endsWith("gh"));
console.log(combine.endsWith("Singh"));

// Includes() - Takes a string as parameter and checks if the string includes 
// the provided string or not 

console.log(combine.includes("Kumar"));
console.log(combine.includes("Shubh"));
console.log(combine.includes(" "));

// A lot of transformation methods are also available 

// toLowercase - Converts the string to lowecase
// toUpperCase - Converts the string to uppercase 

console.log(combine.toLowerCase());
console.log(combine.toUpperCase());

// toLocalLowercase - 
// toLocalUppercase - 

console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());
