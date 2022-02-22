// object chain

var Student = function (name, roll) {

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

var hitesh = new Student("Hitesh", "A00");


// creating a funtion in prototype
Student.prototype.getFirstName = function () {
    console.log(`FirstName: ${this.firstName}`);
};

// shubh.getFirstName(); 

// Assuming that a firstName property is available in the object 
console.log(shubh.firstName);

// In case the property is not there, the code will produce undefined
// output, which is tackled with hasOwnProperty methods 

if (shubh.hasOwnProperty("firstName")) {
    console.log(shubh.firstName);
}

// won't run since the property is wrong 
if (shubh.hasOwnProperty("firstNameee")) {
    console.log(shubh.firstName);
}