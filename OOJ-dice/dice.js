var dice = {
  sides : 1000,
  roll : function(){
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}