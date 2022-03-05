// Finally API 

// Chuck Norris - https://api.chucknorris.io 

// fetch return to line 7 then , which return to line 8 then 
// which returns to line 9 then , which return to line 10 then   

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        console.log(response.json());
    })
    .catch();

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        return (response.json());
    })
    .then((data) => {
        // console.log("Data is : ", data);
        var joke = data.value ;
        console.log("Joke: ", joke) ;
    })
    .catch();