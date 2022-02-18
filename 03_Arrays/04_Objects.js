// In Js, Structures are called object 

var student = {
    // key: Value --> Map
    fullName: "Shubhansu Kumar Singh",
    roll: 33,
    section: "K21GP",
};

// Here student is an object, It's element can be accessed using the dot 
// operator 

console.log(student);
console.log(student.fullName);
console.log(student.roll);
console.log(student.section);

// Other than dot operator, we can also use the key to access value
// key should be passed as string 

console.log(student["fullName"]);

// Values can be updated 
student.roll = 55;

// table function of console is used to represent data  in form of table 
console.table(student);

// Assignment - Create an object to list the feature of a smart phone

var realme8 = {
    fullName: "Realme8 5G ",
    RAM: 8,
    InternalMemory: 128,
    processor: "Dimensit500",
    isBiometricSecure: true,
    display: "Full HD IPS panel"
};

console.table(realme8);
