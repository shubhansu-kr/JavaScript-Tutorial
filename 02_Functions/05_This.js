// this in js is used to refer to the global context 

console.log(this) // gives {} -> Empty scope 

function sayMyName() {
    var myName = "asdk";
    console.log(this);
}

sayMyName();