// For loop has the same syntax in Js as we have in cpp 

var arr = [4, 5, 2, 6, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const states = ["Bihar", "Rajasthan", "Up", 32, "asdkfh"];

for (let index = 0; index < states.length; index++) {
    console.log(states[index]);
}

//  Continue - Used to skip the coming block of code for the iterator 

for (let index = 0; index < states.length; index++) {

    // if (typeof states[index] !== 'string') break; --> Ends the loop
    
    if (typeof states[index] !== 'string') break;  // --> Jumps to the updation part

    console.log(states[index]);
}
