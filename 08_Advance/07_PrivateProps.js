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
    getCourseInfo() {
        // whenever referring to the private data memebers, use #
        return this.#courseList;
    }
}

let harsh = new Student("Harsh", "HarshVidit@lco.in");
harsh.enrollCourse("React") ;

// getter is used to access the private data of a class 
// getter usually don't expects parameters 

// setter is used to set the value of private data memebers of a class 
// setter expects a parameter to set the data 

