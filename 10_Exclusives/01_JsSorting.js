// Sorting method in Js 

// Elements of the array are first converted into string and then
// sorted according to the the utf 16 series 

// By default the sorting is sone in non-decreasing order 

const myArr = [3, -2, -7, 32, 0, 3];
console.log(myArr);

// using default method to sort the array 

myArr.sort();
console.log(myArr);

console.log("Sorting the array according to mySort criteria");

var mySort = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    return 0;
};

myArr.sort(mySort);
console.log(myArr);

// Lets try to sort some objects 
var batmanGamesOrder = (a, b) => {
    var batman = ["Shubh", "Shisho", "Shahi", "vivek"];
    return batman.indexOf(a) - batman.indexOf(b);
}

var list = ['Shahi', 'Shubh', "vivek"];

console.log(list);
// Sorting the list on the basis of defined order 
list.sort(batmanGamesOrder);

console.log(list);