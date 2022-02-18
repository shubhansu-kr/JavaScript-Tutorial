var users = ["tim", 'tom', 'sakf', ' askf', 'aklja;f'];

// Slice(range) - Slicing is used to take a chunk out of array 

console.log(users.slice(1, 4)); // 1 is inclsive and 4 is exclusive
console.log(users);

// Splice(index, count , value) - Insert the value at index and remove count 
// elements from index 

users.splice(2, 2, "Cook", "hardy", "san");
console.log(users);
