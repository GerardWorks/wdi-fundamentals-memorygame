var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
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

function createCards(){
//Loop to create different cards
for (var i=0;i<cards.length;i++){
  //Declaring the variable cards to create a div
  var cardPicture = document.createElement('div');
  //Add a class to the cards div
  cardPicture.className = 'card';
  //'data-card' will be replaced with king or queen
  cardPicture.setAttribute('data-card', cards[i]);
  //user clicks and isTwoCards will run
  cardPicture.addEventListener('click', isTwoCards);
  //gameBoard will have children with the cards div
  gameBoard.appendChild(cardPicture);
  gameBoard.appendChild(cardPicture);
  }
}

function isMatch(cards){
  if(cards[0]===cards[1]){
    alert('match');
    window.location.reload(15000);
  }else{
    alert('try again');
    window.location.reload(15000);
  }
}

//checks for cards in play
function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if(this.getAttribute('data-card') === 'king'){
    this.innerHTML = "<img src='img/king.png' alt='kingofdiamonds'>";
  }else{
    this.innerHTML = "<img src='img/queen.png' alt='queenofdiamonds'>";
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createCards();
