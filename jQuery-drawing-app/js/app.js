var color = $(".selected").css("background-color");

// When clicking on control list items
$(".controls li").click(function(){
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element.
  $(this).addClass("selected");
  // Save current color
  color = $(this).css("background-color");
})


// When add color is pressed
  // show color select or hide the color select

// When color sliders change
  // update new color span

// When add color is pressed
  // append the color to the conrols ul
  // select the new color

// On mouse events on the canvas
  // draw lines
