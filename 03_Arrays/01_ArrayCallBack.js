// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// function isEven(element) {
//     return element % 2 === 0;
// }

// var isEven = function (element) {
//     return element % 2 === 0;
// }

// Arrow function
var isEven = (element) => {
    return element % 2 === 0;
}

// console.log(isEven(4));

// We can directly use the array funtions using the brackets 

// every is used to run operation on each and every element of an array 
var result = [2, 4, 5, 3, 2].every(isEven);
// Here we are not calling the isEven function, rather we are sending 
// refrence (Use case of variable funtion) 

console.log(result); // false, since array has some odd element

// Call backs -> Arrow functions which dont have a name 
// () => {} -> with return type
// () => () -> without return type


// Return type
// var oddCheck = [1, 3, 5, 7].every((e) => {
//     return e % 2 !== 0
// });

// No return type 
var oddCheck = [1, 3, 5, 7].every((e) => (
    e % 2 !== 0
));

console.log(oddCheck);