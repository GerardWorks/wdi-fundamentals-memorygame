/*
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";
*/
/*
if(cardTwo===cardFour){
  alert('Not a match. Please try again.');
}
if(cardOne===cardTwo){
  alert('You found a match!');
}else if(cardThree===cardFour){
  alert('You found a match!');
}
else{
  alert('Not a match. Please try again.');
}
*/
var gameBoard = document.getElementById('game-board');

function createCards{
for (var i=0;i<4;i++){
  var cards = document.createElement('div');
  cards.className = 'card';
  gameBoard.appendChild('cards');
  }
}
createCards();
