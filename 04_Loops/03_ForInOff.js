// For in and for off loops 

var names = ["Yt", "ln", "insta", "dis", "fb"];

// For off is used to iterate through arrays 

for (const n of names) {
    console.log(n);
}

const symbol = {
    yt: "Youtube",
    ln: "LinkedIn",
    insta: "instagram",
    dis: "Discord"
}

for (const n in symbol) {
    // console.log(n); // n(s) are keys of object 

    // To print the value , we have to derefrence it 
    console.log(symbol[n]);
}