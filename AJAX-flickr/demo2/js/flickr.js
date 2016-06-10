$(document).ready(function(){
  $('form').submit(function(evt){
    evt.preventDefault();
    var flickerURL = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchItem = $('#search').val();
    //console.log(searchItem);
    var flickrOptions = {
      tags: searchItem,
      format: "json"
    };
    function displayPhotos(data){
      var photoHTML = '<ul>';
      $.each( data.items, function(i, photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">'
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    };
    $.getJSON(flickerURL, flickrOptions, displayPhotos);
  }); // end submit
}); // end ready

