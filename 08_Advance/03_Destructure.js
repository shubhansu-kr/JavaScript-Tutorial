var user = ["shubh", 6, "student"];

// We can access the data of this structure using the 
// conventional [index] operator or we can destructure it and access the 
// indivisual elements 

var [userName, courseCount, role] = user;

console.log(userName);
console.log(role);
console.log(courseCount);

// Destructure is mostly used with objects 

var myUser = {
    fullName: "Shubhansu Kumar",
    myCourseCount: 6,
    uRole: "Student"
};

// We can either access the elements using the dot opearator 
// or we can destructure the data agaiin 

console.log(myUser.fullName);

// Destructure the data 

// const { uName, count, myRole } = myUser;
// console.log(count);  --> gives undefined output , name of keys should
// be same as the objects 

const { fullName, myCourseCount, uRole } = myUser;
console.log(myCourseCount);