// Don't use space for naming of files .
// Classes name start with a Uppercase letter 
// constructor are automatically created if we wont  

class Student {
    constructor(name, email) {
        this.name = name;            // Creates a data memeber and assigns
        this.email = email;
    }
    courseList = [];
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(...a) {
        for (const course of a) {
            this.courseList.push(course);
        }
    }
    getCourseInfo() {
        return this.courseList;
    }
}

// Creating objects 

let shubh = new Student("Shubh", "shubhansu@lco.in");
console.log(shubh.getInfo());

// console.log(shubh.getCourseInfo()); Empty array 

shubh.enrollCourse("ReactJs", "VueJs", "AngularJs");
console.log(shubh.getCourseInfo());

// To export any instace from file we use module.exports = []

module.exports = Student ;