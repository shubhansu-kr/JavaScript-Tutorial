var myMap = new Map();

// Map is a key value pair data structure 

// set(key, value) function - Used to insert elements in map 
myMap.set(5.11, "Shubh");
myMap.set(5.07, "Shahi");
myMap.set(5.06, "Vivek");
myMap.set(5.10, "Shisho");

// log map 
console.log(myMap);

// For of is used to access the element of maps 
// since For of is used to access the elements of an object 

// keys() - returns the keys to the var
for (let k of myMap.keys()) {
    console.log(k);
}

// values() - returns the values of element 
for (let v of myMap.values()) {
    console.log(v);
}

// We can also use an array to get both keys and values of map element 
// for of gives the key first and value 

for (let [k, v] of myMap) {
    console.log(`${k} --> ${v}`);
}

// Keys are considered as index in maps 

// For each is used to get the values of map's element 

myMap.forEach((v) => (console.log(v)));

// For each gives value first and then key 
myMap.forEach((v, k) => (console.log(`${v} <-- ${k}`)));

// delete function is used to remove elements on the basis of their key
myMap.delete(5.11);
myMap.forEach((v, k) => (console.log(`${v} <-- ${k}`)));

