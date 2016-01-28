var hands = ['rock','paper', 'scissors']
function getHand(hands) {
  return hands[parseInt(Math.random()*10)%3]
}
// console.log(getHand(hands));
var player1 = {
  name: 'Bobby',
  getHand: getHand
}
var player2 = {
  name: 'Skip',
  getHand: getHand
}
function playRound(player1, player2) {
  player1.getHand(hands);
  player2.getHand(hands);
  for (var i = 0; i < 4; i++) {
    console.log(i);
    if(player1.getHand(hands) == "rock" && player2.getHand(hands) == "scissors") {
      console.log(player1.name + " Wins!");
    } else {
      console.log(player2.name + " Wins!");
    }
    if(player1.getHand(hands) == "paper" && player2.getHand(hands) == "rock") {
      console.log(player1.name + " Wins!");
    } else {
      console.log(player2.name + " Wins!");
    }
    if(player1.getHand(hands) == "scissors" && player2.getHand(hands) == "paper") {
      console.log(player1.name + " Wins!");
    } else {
      console.log(player2.name + " Wins!");
    }
    if(player1.getHand(hands) == player2.getHand(hands)) {
      console.log("It's a Tie!");
    }
  }
}
console.log(playRound(player1, player2));
