//  ...[varName] --> spread operator or REST operator (auto)

// Math is a library used for mathematical operations

var maxNumber = Math.max(3, 5, 3, 5, 7, 7, 3, 5);
console.log(maxNumber);

// Object.assign() is used to assin values to objects 

// Declaring an empty object 
var myObj = {};

// Using assign function to add elements to objects ;
Object.assign(myObj, { count: 21, roll: 33 }, { dob: 7, st: "Hell" });

console.log(myObj);

// Function 

function sumOne(a, b) {
    return a + b;
}

console.log(sumOne(4, 5));

// Function expects a proper parameter 

myArr = [3, 4, 5, 4];
// console.log(sumOne(myArr)); Cannot comprehend the input properly 
// since the parameter is differnt 

// spread is used to overcome this problem 
// I have a function which is expecting two int value , but i have an array
// which has twp element. I cannot pass the value directly so 
// Using spread operator to pass array as indivisual 

console.log(sumOne(...myArr)); // prints the sum of first two element 
// myArr has more than two elements , so the function pics the first two element

// Spread Operator (...[var]) --> Spreads the group into indivisuals

// If we want to have a function which can adapt to any number of 
// inputs it gets , we use ...[var] as parameter in function 

// REST operator 
function sumInfi(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumInfi(...myArr));

// WE can also use fixed value and Rest operator 

function sumProd(a, b, ...args) {
    let sum = 0;
    let prod = a * b;
    for (const arg of args) {
        sum += arg;
    }
    return [prod, sum];
}

console.log(sumProd(...myArr));

