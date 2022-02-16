var temperature;

// GET temperature from database 

temperature = 20;

if (temperature < 20) {
    console.log("It's too cold outside ");
}
else if (temperature < 40) {
    console.log("It's warm out there ");
}
else {
    console.log("It's Too hot outside");
}

// Payment logic 
// If user is loged in, email verified and card info verified, then only allow purchase


var isLoggedin = true;
var isEmailVerified = false;
var isCardInfoCorrect = true;

if (isLoggedin) {
    if (isEmailVerified) {
        if (isCardInfoCorrect) {
            console.log("Enrolled Sucessfully");
        }
        else {
            console.log("Invalid Card Details ");
        }
    }
    else {
        console.log("Verify your email first ");
    }
}
else {
    console.log("You need to log in to LCO account first");
}

if (isLoggedin && isCardInfoCorrect && isEmailVerified) {
    console.log("Enrolled sucessfully");
}

// Course Access 
// ALlow access if user is logged in with either of the three credentials 
// facebook, google , Email 

var isLoggedinFromFacebook = false;
var isLoggedinFromEmail = true;
var isLoggedinFromGoogle = false;

if (isLoggedinFromEmail || isLoggedinFromFacebook || isLoggedinFromGoogle) {
    console.log("Welcome to LCO ");
}

// Display an option to signin if user is not signed in, else signoff

var isAuthenticated = false;
if (isAuthenticated) {
    console.log("Click here to signoff");
} else {
    console.log("Click here to signin");
}

isAuthenticated ? console.log("Sign off") : console.log("Sign in");