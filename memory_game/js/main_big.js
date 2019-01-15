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
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
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
	},
	{
	order: 5,
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	order: 6,
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	order: 7,
	rank: "queen", 
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	order: 8,
	rank: "queen", 
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{order: 9,
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
	{
	order: 10,
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	order: 11,
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
	{
	order: 12,
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
];

var cardsInPlay = [];
var whoBeenPlayed = [];
var cardSuits = [];

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('width', '100px')
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
	cardSuits.push(cards[cardId].suit);
	console.log(whoBeenPlayed, cardsInPlay, cardSuits);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if ((cardsInPlay[0] === cardsInPlay[1])
			&& (cardSuits[0] === cardSuits[1])) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

function resetAll() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var childCard = document.getElementById('card' + i);
		childCard.setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
	whoBeenPlayed = [];
	cardSuits = [];
	console.log(cardsInPlay, whoBeenPlayed);
}

document.getElementsByTagName('button')[0].addEventListener('click', resetAll);

createBoard();