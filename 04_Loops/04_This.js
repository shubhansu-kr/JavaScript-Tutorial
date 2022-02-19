// this refers to the global context in regular function calls 

// A funtion call without an object is called a regular funtion call 

console.log(this); // Prints an empty string

var user = {
    name: "Shubh ",
    class: "afkh",
    count: 21,
    getCount: function () {
        console.log(this.count);
    },
    getThis: function () {
        console.log(this); // It contains the object

        function sayHello() {
            console.log("Hello !");
            console.log(this); // This contains the global context, since its a regular call
        }
        sayHello();
    }

}

user.getCount();

user.getThis();