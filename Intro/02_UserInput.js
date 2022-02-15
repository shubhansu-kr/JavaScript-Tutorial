// User Signup demo     

const uid = "abc123";
var fullName = "Shubhansu Kumar Singh";
var email = "shubhansu@lco.in";
var isLoggedInFromGoogle = false;
var state = "Bihar" ;
var country = "India" ;
var isStudent = true ;
var university = "LPU" ;
var age = 18 ;


// fullName = prompt("Enter your full name : ")

// console.log("UID : ", uid);
// console.log("Full Name : " + fullName);
// console.log("Email : ", email);
// console.log("isLoggedInFromGoogle : ", isLoggedInFromGoogle);

// There is another method to club all the print statements using
// the backtick - Interpolation

console.log(`
    UID : ${uid}
    Full Name : ${fullName}
    Email : ${email}
    isLoggedInFromGoogle : ${isLoggedInFromGoogle}
    State : ${state} 
    Country : ${country} 
    isStudent : ${isStudent} 
    Studies in : ${university}
    Age : ${age}
`);