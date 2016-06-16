// var dice = {
//   sides : 1000,
//   roll : function(){
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }

function Dice(sides){
  this.sides = sides;
}

Dice.prototype.roll = function(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice = new Dice(100)
