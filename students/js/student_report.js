var html = "";
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function listStudents(){
  for(student in students){
  html += "<p><strong>Student: " + students[student].name + "</strong></p>";
  html += "<ul>";
  html += "<li>Track:        " + students[student].track + "</li>";
  html += "<li>Achievements: " + students[student].achievements + "</li>";
  html += "<li>Points:       " + students[student].points + "</li>";
  html += "</ul>";
  }
  print(html);
}

function getStudentReport(student){
  var report = "<p><strong>Student: " + students[student].name + "</strong></p>";
  report += "<ul>";
  report += "<li>Track:        " + students[student].track + "</li>";
  report += "<li>Achievements: " + students[student].achievements + "</li>";
  report += "<li>Points:       " + students[student].points + "</li>";
  report += "</ul>";
  return report;
}

function searchStudent(name){
  for(student in students){
    if( name === students[student].name ){
      html = getStudentReport(student);
      print(html);
      break;
    } else {
      print("That student does not exist!");
    }
  }
}

var nameToFind = prompt("Enter a student name:");
searchStudent(nameToFind);
