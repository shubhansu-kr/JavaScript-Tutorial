// Inheritance is a concept used to pass on the data members and functions
// of class to another class which is a child of first class 

class Student {
    constructor(name, email) {
        this.name = name;            // Creates a data memeber and assigns
        this.email = email;
    }

    // # makes the data private 
    #courseList = [];
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(...a) {
        for (const course of a) {
            this.#courseList.push(course);
        }
    }
    // static is used to make the memeber uninheritable 

    static getCourseInfo() {
        // whenever referring to the private data memebers, use #
        return this.#courseList;
    }

    Attendence() {
        return "You are Present";
    }
};


// TO make this class a child of Student class, we will simply use 
// extends [class name], after the class name 

class Teacher extends Student {
    // Teacher is a child class of Student 

    constructor(a, b, c) {
        // Super method is used to make a super constructor 
        super(a, b);
        this.course = c;
    }

    // Over Writing a inherited funciton 
    Attendence() {
        return "Teacher is Present";
    }
};

let megha = new Teacher("Megha", "megh@lco/in", "ECE216");
console.log(megha.getInfo());
console.log(megha.Attendence());


// To make a member inheritable, we use a keyword static 