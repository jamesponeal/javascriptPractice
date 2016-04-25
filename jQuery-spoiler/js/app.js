//Prevent people from seeing spoilers.
//Hide spoilers and reveal them through user interaction.

//1. Hide spoiler.
$(".spoiler span").hide();
//2. Add a button.
$(".spoiler").append("<button>Reveal Spoiler!</button>")
//3. When button pressed:
$("button").click(function(){
  //3.1 Show the spoiler.
  $(this).prev().show();
  //3.2 Hide button.
  $(this).remove();
});

