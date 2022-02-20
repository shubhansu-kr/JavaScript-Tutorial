// ./Projects/01_Project

// Select the objects using the query selector

// window is an object which has a whole bunch of different funcitons 
// ONe of which is getcomputedstyle 

// it takes a variable which is storing the tag as input 


var red = document.querySelector(".red");
window.getComputedStyle(red);

// It return all the styling of the element/object  
// To get the specific style we use dot operator 

window.getComputedStyle(red).backgroundColor; // gives the background color

