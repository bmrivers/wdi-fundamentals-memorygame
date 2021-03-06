console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

var cards = [
	{
	order: 1,
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	order: 2,
	rank: "queen", 
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	order: 3,
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	order: 4,
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var whoBeenPlayed = [];

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', 'card' + i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


function flipCard () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	whoBeenPlayed.push(cards[cardId].order);
	cardsInPlay.push(cards[cardId].rank);
	console.log(whoBeenPlayed, cardsInPlay);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}
/*
function resetAll () {

	for (var i = 0; i < cardsInPlay.length; i++) {
		var flippedCard = document.getElementById('game-board')[whoBeenPlayed[i]];
		flippedCard.setAttribute('src', 'images')
		cardsInPlay.pop();
	}

}*/
function resetAll() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var childCard = document.getElementById('card' + i);
		childCard.setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
	whoBeenPlayed = [];
	console.log(cardsInPlay, whoBeenPlayed);
}

document.getElementsByTagName('button')[0].addEventListener('click', resetAll);


createBoard();