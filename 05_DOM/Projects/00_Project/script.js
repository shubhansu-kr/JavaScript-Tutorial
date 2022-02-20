var counter = document.querySelector(".counter") ;
var followers = document.querySelector(".followers") ;

// counter.innerHTML = 1004 ;

// Let's use set_interval to display the increasing count 

let count = 1 ;

setInterval( () => {
    if (count < 1000) {
        count ++ ;
        counter.innerText = count ;
    }
}, 1);

setTimeout(()=>{
    followers.innerText = "Followers on Insta ! "
}, 5000);