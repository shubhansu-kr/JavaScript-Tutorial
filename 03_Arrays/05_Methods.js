// Methods === Functions 

// Methods for an object 

var users = {
    username: "Shubh",
    logCount: 23,
    role: "admin",
    isLoggedInFromGoogle: true,
    courseEnrolled: [],  // empty array
    buyCourse: function (courseName) {
        this.courseEnrolled.push(courseName);
    },
    getUserCount: function () {
        return ` ${this.username} is enrolled in ${this.courseEnrolled.length} course`
    },
    getUserInfo: function () {
        console.table(this);
    }
};

console.log(users);
console.log(users.getUserCount());

// Adding react course to the user course list 
users.buyCourse("ReactJS");
console.log(users.getUserCount());
// console.log(users);

users.getUserInfo() ;