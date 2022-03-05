// Event Loop -- Loop when the event occurs .

// while (queue.waitformessage()) {
//     queue.processthemessage();
// }

// Genrally time in programming is given in miliseconds 
// 1 sec = 1000 millisec 

// setTimeout expects an arrow function and a time interval for timeout
// setTimeout(() => {}, [time]) ;
// Is loaded when time is over 

// Classic way of execution in js - Executes all the code, who wants to 
// be executed  

const uno = () => {
    setTimeout(() => {
        console.log("Got response ");
    }, 5000);
    console.log("One ");
};

const dos = () => {
    console.log("Two ");
};

const tres = () => {
    console.log("Three ");
};

uno();
dos();
tres();
