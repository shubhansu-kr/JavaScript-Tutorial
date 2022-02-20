// We can select the objects using the classes, tags, id, name etc

// getting the elements using tag name 
var title = document.getElementsByTagName("h1");

// it returns an array, which contains a lot of properties and values

// Accessing the elements of array returned by getelement method
var title_content = document.getElementsByTagName("h1")[0].innerText ;


// getting the elements using id 
var title = document.getElementById("title");

// getting the elements using class 
var title = document.getElementsByClassName("title");

