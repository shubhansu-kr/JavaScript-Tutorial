// Scope chain in Js is similar to c++ ;
// You can ask for popsicle from parent or grandparent, 
// but not from the siblings or child.

var myName = "Shubhansu Kumar Singh";

function sayMyName() {
    // var myName = "Shubhansu-kr";
    console.log(myName);

    function sayMyName1() {
        // var myName = "Shubh";
        console.log(myName);
    }

    function sayMyName2() {
        var myName = "Sid";
        console.log(myName);
    }
    
    sayMyName1();
    sayMyName2();
    
}

console.log(myName);
sayMyName();