var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor) ;

const getBGColor = (SelectedElement) => {
    return window.getComputedStyle(SelectedElement).backgroundColor;
}

// console.log(getBGColor(red)) ;
// console.log(getBGColor(pink)) ;
// console.log(getBGColor(orange)) ;
// console.log(getBGColor(cyan)) ; 