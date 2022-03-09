const cards = document.querySelectorAll(".card");
console.log(cards);

// querySelectorAll is used to grab all the Element with a particular class
// and returns a list of all the element 

//variables to keep track of flipped cards 
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);

  // add class list is used to append the class to the selected element
  // So basically we append flip to the element class card 
  // but once its appended, we cannot click twice and append again 
  // since its no more selected (we are selecting only cards class)

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
  // Ternary
  // (firstCard.dataset.image === secondCard.dataset.image) ? success() : fail() ;
}

function success() {
  //   console.log("Success");

  // removing the event listner so that the card stays flipped and 
  // cant be flipped back since the match is found ;
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");

  // Now that our cards dont match , we need to go back to prior situation 
  // First change we made was appending flip to the class of element 
  // So first step is to remove the flip class 

  // Using setTimeout to make the reset visible 
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);

  // Plus we need to reset the variables to initial state . 
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

// We also want to shuffle the cards everytime we reload 
// Self calling function 

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();


