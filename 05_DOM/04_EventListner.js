// An event is simply an action identifier 
// eg - click , hover , zoom , network status , etc 

// addEventListner method is used to add listener to the properties 

var pink = document.querySelector(".pink");

const getBGColor = (SelectedElement) => {
    return window.getComputedStyle(SelectedElement).backgroundColor;
}

var pinkElementColor = getBGColor(pink);

// Now lets add listner to the pink elment

pink.addEventListener('mousecenter', () => {
    // add what you want to do when mouse is over orange element
    pink.style.background = orangeElementColor;
});

// style method is used to make changes to the style
// This will set the background color to orange 
pink.style.background = orangeElementColor;