//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image - lightbox.

// Add overlay.
  // An image.
  // A caption.
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>')

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

// Capture the click event on a link to an image.
$("#imageGallery a").click(function( event ){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay with the image linked in the link.
  $image.attr("src", imageLocation)
  // Show the overlay.
  $overlay.show();
  //1.3 Add the 'alt' attribute (caption).
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//3. When overlay is clicked.
$overlay.click(function(){
//3.1 Hide overlay.
  $overlay.hide();
});


