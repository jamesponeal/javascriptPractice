var quiz = new Quiz();

var question1 = new Question("What is your quest?", "I seek the holy grail", "I'm here to trim shrubbery", 1);
var question2 = new Question("It's 106 miles to Chicago, it's dark, and what are you wearing?", "Sunglasses", "A Fedora", 1);
var question3 = new Question("What is the airspeed velocity of an unladen swallow?", "12 mph", "African or European?", 2);
var question4 = new Question("What color was Luke Skywalker's lightsaber in 'Episode IV: A New Hope'?", "Green", "Blue", 2);
var question5 = new Question("What color is Darth Vader's lightsaber?", "Red", "Pink", 1);
var question6 = new Question("What is the first rule of fight club?", "You don't talk about fight club", "You don't write about fight club", 1);

quiz.add(question1);
quiz.add(question2);
quiz.add(question3);
quiz.add(question4);
quiz.add(question5);
quiz.add(question6);

quiz.questions = quiz.shuffle(quiz.questions);

var questionElement = document.getElementById("question");
var choice1 = document.getElementById("choice0");
var choice1Button = document.getElementById("guess0");
var choice2 = document.getElementById("choice1");
var choice2Button = document.getElementById("guess1");
var progressElement = document.getElementById("progress");
var internalElement = document.getElementById("internal");

quiz.renderQuestion(questionElement);
quiz.renderChoice1(choice1);
quiz.renderChoice2(choice2);
quiz.renderProgress(progressElement);

choice1Button.onclick = function(){
  quiz.checkAnswer(1);
  quiz.next();
  if(quiz.questionIndex < quiz.questions.length){
    quiz.renderQuestion(questionElement);
    quiz.renderChoice1(choice1);
    quiz.renderChoice2(choice2);
    quiz.renderProgress(progressElement);
  } else {
    internalElement.innerHTML = quiz.renderResults();
  }
}

choice2Button.onclick = function(){
  quiz.checkAnswer(2);
  quiz.next();
  if(quiz.questionIndex < quiz.questions.length){
    quiz.renderQuestion(questionElement);
    quiz.renderChoice1(choice1);
    quiz.renderChoice2(choice2);
    quiz.renderProgress(progressElement);
  } else {
    internalElement.innerHTML = quiz.renderResults();
  }
}

