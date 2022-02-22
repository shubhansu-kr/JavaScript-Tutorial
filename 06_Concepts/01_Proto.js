// Proto 

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

var shubh = new Student("Shubhansu", "A33");
// console.log(shubh); // Prints the copy of student 

var hitesh = new Student("Hitesh", "A00");
// console.log(hitesh);

// We can access the members of object directly 
// console.log(shubh.firstName);

// But inorder to access, edit or update the object prototype we 
// the prototype method 

// creating a funtion in prototype
Student.prototype.getFirstName = function () {
    console.log(`FirstName: ${this.firstName}`);
};

// Everytime a new instance of object is created, it's the job of new 
// keyword to find the prototype and add it to the object

console.log(shubh);
// doesn't display the prototype here

// shubh.getFirstName(); 

console.log(shubh.firstName);
shubh.getFirstName();

// shubh.prototype.marks = 32 ;
// console.log(shubh.marks);   