var numCorrect = 0;
var quiz = [
  ["What is your favorite color?", "blue"],
  ["What is your favorite food?", "pizza"],
  ["How many states are there?", "50"]
];
var answer;
var correct = [];
var wrong = [];

function print(message) {
  document.getElementById('output');
  output.innerHTML += message;
}


for(var i = 0; i < quiz.length; i += 1){
  var answer = prompt(quiz[i][0]);
  if(answer === quiz[i][1]){
    numCorrect += 1;
    correct.push(quiz[i][0]);
  } else {
    wrong.push(quiz[i][0]);
  }
}

print("<h2>Out of " + quiz.length + " questions, you correctly answered " + numCorrect + ".</h2>");

if( correct.length > 0 ){
  print("<p>You answered the following questions correctly:</p>");
  for(var i = 0; i < correct.length; i++ ){
    print( " - " + correct[i] + "<br>" );
  }
};

if( wrong.length > 0 ){
  print("<p>You answered the following questions wrong:</p>");
  for(var i = 0; i < wrong.length; i++ ){
    print( " - " + wrong[i] + "<br>" );
  }
};
