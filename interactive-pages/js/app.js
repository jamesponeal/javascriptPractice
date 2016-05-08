//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); // completed-tasks



//Add a new task
function addTask(){
  console.log("Add task...")
  //When the button is pressed
  //Create a new list item with the text from #new-task
    //input checkbox
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of these elements needs modified and appended
}

//Edit existing task
function editTask(){
  console.log("Edit task...")
  //When the edit button is pressed
    // if the class of the parent is .editMode
      // switch from editMode
      // label text become the input's value
    // else
      // switch to editMode
      // input value becomes the label's text
    //Toggle .editMode on the parent
}

//Delete an existing task
function deleteTask(){
  console.log("Delete task...")
  //When delete button is pressed
    //Remove parent list item from the unordered list.
}

//Mark a task as complete
function taskCompleted(){
  console.log("Task complete...")
  //When the checkbox is checked
    //append the list item to the completed-tasks
}

//Mark a task as Incomplete
function taskIncomplete(){
  console.log("Task Incomplete...")
  // When the checkbox is unchecked
    //append the itme to the incomplete-tasks
}


//Set the click handler to the addTask function
addButton.onclick = addTask;
