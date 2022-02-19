// While and do while loop are not used much in development 

const states = ["Ram", "Shyam", "Shivam", 325, "he"];

let i = 0;
while (i < states.length) {
    console.log(states[i]);
    i++;

    if (typeof states[i] === 'number') {
        break;
    }
}

// console.log("");

i = 0;
do {
    console.log(states[i]);
    i++;
} while (i < states.length);
