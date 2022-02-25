// Html tags are called elements and it's context is called node element or text

var courses = [
    {
        name: "React JS",
        price: 199
    },
    {
        name: "Angular JS",
        price: 99
    },
    {
        name: "Next JS",
        price: 299
    },
    {
        name: "Express JS",
        price: 249
    },
    {
        name: "Node JS",
        price: 149
    }
];

function genrateList(courses) {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add(float - right);

        const price = document.createTextNode(course.price);
        span.appendChild("$ " + price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// genrateList(courses);

window.addEventListener("load", genrateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    genrateList(); // adds duplicate course list 
});

const buttonRev = document.querySelector(".btn-primary");
buttonRev.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    genrateList();
});