const shubh = {
    fullName: "Shubhansu kumar ",
    role: "User",
    courseCount: 4,
    getInfo: function () {
        console.log(`${this.fullName} is a ${this.role} enrolled in ${this.courseCount} courses`);
    }
};

// Creating another user object 

const hitesh = {
    fullName: "Hitesh Chaudhry ",
    role: "Admin",
    courseCount: 100
};

// We can call getinfo function using shubh but not using hitesh
// hitesh.getInfo(); throws error

shubh.getInfo(); // Gives the info 

// Just like friend class, we are going to use getInfo function for hitesh
// We can do that using bind
// bind is used during function calling and always returns a refrence 

shubh.getInfo.bind(hitesh); // This would return a refrence 
shubh.getInfo.bind(hitesh)(); // This would run the refrence function

// Or we can store the refrence 
var hiteshInfo = shubh.getInfo.bind(hitesh);
hiteshInfo();

// Now we can also use a method called call of the function getInfo 
// Ulinke bind, call actually executes the function instead of returning
// a refrence.

// call method accepts a parameter for this context 
shubh.getInfo.call(hitesh);

