console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);


	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}
console.log(cards[0]);

flipCard(0);
flipCard(2);