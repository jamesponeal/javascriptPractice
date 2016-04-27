//Problem: It looks bad when window is resized smaller.
//Solution: Hide the text links and swap them out with more appropriate navigation.

// Create a select and append menu.
var $select = $("<select></select>");
$("#menu").append($select);
// Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  // Create an option.
  var $option = $("<option></option>");

  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
  // options value is the href
  $option.val($anchor.attr("href"));
  // options text is the text of the link.
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// Create button
// var $button = $("<button>Go!</button>");
// $("#menu").append($button);

// Rather than button we will bind listener on select.
$select.change(function(){
  window.location = $select.val();
})

// Bind click to button.
// $button.click(function(){
//   // Go to select's location.
//   window.location = $select.val();
// });

