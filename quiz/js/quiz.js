var numCorrect = 0;
var quiz = [
  ["What is your favorite color?", "blue"],
  ["What is your favorite food?", "pizza"],
  ["What is your quest?", "I seek the holy grail"]
]

function print(message) {
  document.write(message);
}


for(i=0; i < quiz.length; i += 1){
  var answer = prompt(quiz[i][0]);
  if(answer == quiz[i][1]){
    numCorrect += 1;
    alert("CORRECT!!");
  } else {
    alert("Wrong... bummer!");
  }
}

print("Out of " + quiz.length + " questions, you correctly answered " + numCorrect + ".");
