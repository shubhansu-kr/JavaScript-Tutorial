// Create an application with the following roles 
// admin - gets full access 
// subadmin - gets access to create/delete courses 
// testprep - gets access to create/delete test 
// user - gets access to consume content
// others - trial access 

// Input : getUserRole(name, role) 

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} gets the full access`;
            break; // break is dimmed because of return 
        case "subadmin":
            return `${name} gets the access to delete/create course`;
        case "testprep":
            return `${name} gets the access to delete/create tests`;
        case "user":
            return `${name} gets the access to consume content`;
        default:
            return `${name} need to login`;
    }
}

var userName = "Shubhansu-kr";
var role = "user";

var result = getUserRole(userName, role);

console.log(result);

// In JS we can create a variable and assign a funtion to it 
// and use it as a funtion 

// var sum = funtion(num1, num2) {
//     return num1 + num2;
// } --> Syntax error : 