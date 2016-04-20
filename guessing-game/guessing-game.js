var correct = false;
var numberToGuess = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Guess a number from 1 to 6. What is your guess?");
if (parseInt(guess) === numberToGuess) {
  correct = true;
}
if (correct === true) {
  document.write("<h2>You are correct!!</h2>")
} else {
  document.write("<h2>You are incorrect!! The correct number was " + numberToGuess + "!</h2>")
}
