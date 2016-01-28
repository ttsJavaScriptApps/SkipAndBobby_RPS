var hands = ['rock','paper', 'scissors']
function getHand(hands) {
  return hands[parseInt(Math.random()*10)%3]
}
console.log(getHand(hands));
