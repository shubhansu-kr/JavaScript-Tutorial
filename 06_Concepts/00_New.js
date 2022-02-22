// objects == functions 
// Uppercase is used to name a prototype (standard practice) 

// creating prototype 
var Student = function (name, roll) {

    // this is referring to the object which will be created using new 
    this.firstName = name;
    this.roll = roll;
    this.getData = () => {
        console.log(`
            Name: ${this.firstName}
            Roll: ${this.roll}
        `);
    };
}

// Create objects of student 

// var shubh = Student("Shubhansu", "A33"); // missing new keyword
// Without the new key word the this pointer was pointing towards the 
// window and not the object, that's why nothing was happening.
// console.log(shubh); // Prints undefined 

// new keyword creates an instant of Student and assign its refrence to this 
var shubh = new Student("Shubhansu", "A33");
console.log(shubh); // Prints the copy of student 

var hitesh = new Student("Hitesh", "A00");
console.log(hitesh);

shubh.getData();


