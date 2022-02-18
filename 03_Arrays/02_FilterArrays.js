// In programming, Start is inclusive and end is exclusive 

var numArr = [4, 6, 4, 2, 6, 34, 7, 3, 5, 3, 4];

// fill() - It is used to fill the array with certain element 
// It takes 3 arguments - Element to fill, starting index, end index
// Starting index is inclusive, and end is exclusive 

// Fills the whole array with 0, since start and end are not mentioned
console.log(numArr.fill(0));

// Fills 2 from position 3 to 5 (exclusive) ie - 3, 4.
numArr.fill(2, 3, 5);
console.log(numArr);


// Filter - filter is used to run logic on each and every element 
// of array and remove the unwanted elements(which do not follow the logic) .
// It accepts a call back function as a logic  

var myNumber = [3, 5, 2, 5, 67, 4, 3, 1, 9, 4, 0];

var myEvenNumber = myNumber.filter((num) => (num % 2 == 0));
console.log(myEvenNumber);

var myOddNumber = myNumber.filter((num) => (num % 2 != 0));
console.log(myOddNumber);

