// Create an application with the following roles 
// admin - gets full access 
// subadmin - gets access to create/delete courses 
// testprep - gets access to create/delete test 
// user - gets access to consume content 

var user = "user";

switch (user) {
    case "admin":
        console.log("You get the full access ");
        break;
    case "subadmin":
        console.log("You get the access to delete/create course");
        break;
    case "testprep":
        console.log("You get the access to delete/create tests");
        break;
    case "user":
        console.log("You get the access to consume content");
        break;
    default:
        console.log("You need to login");
        break;
}