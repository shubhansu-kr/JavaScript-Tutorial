// Let's create an object with a proto 

var Student = {
    fullName: "",
    roll: 0,
    getDetails: function () {
        console.log(`Name: ${this.fullName}, Roll: ${this.roll}`);
    }
}

// Object.create method is used to create objects 

var shubh = Object.create(Student);
console.log(shubh);
shubh.fullName = "Shubhansu Kumar";

shubh.getDetails();

// Using constructor 
var sam = Object.create(Student, {
    fullName: { value: "Samuel tewer" },
    roll: { value: 43 }
});

sam.getDetails();