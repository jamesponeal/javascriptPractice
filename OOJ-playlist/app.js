var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking On Sunshine", "Katrina and the Waves", "3:43");
var hello = new Song("Hello", "Adele", "4:55");
var warPigs = new Song("War Pigs", "Cake", "3:54");
var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(hello);
playlist.add(warPigs);
playlist.add(manOfSteel);


var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
var backButton = document.getElementById("back");
backButton.onclick = function(){
  playlist.back();
  playlist.renderInElement(playlistElement);
}