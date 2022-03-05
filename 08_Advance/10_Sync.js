// We have methods which depend on each other , so we dont want 
// to mess the order of execution 

// console loggin is not a standard practice, we always return a value
// and strore it in a variable 

const uno = () => {
    setTimeout(() => {
        return "One";
    }, 2000);
};

const dos = () => {
    // Resolve -> Everything worked fine 
    // Reject -> Error 
    return new Promise((resolve, rject) => {
        setTimeout(()=>{
            resolve("Two ") ;
        }, 2000);
        
    });
};

const tres = () => {
    return "Three ";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
    // valone is undefined when it is called because the 
    // function hasn't returned any value here due to the set timeout 

    // However if we use async keyword, we get a promise that is executed 
    // while we wait for the response 

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();

// Every resourse will take some time to be fetched, or run or do any 
// type of task, so it is better to code in an asyncronised manner

// we create promise (an event which will be created in future) 
// promise is either fullfilled or pending 

// Just like an object we can create a promise 

// await is used to wait for a code to be executed 