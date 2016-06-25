function Playlist() {
  this.media = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.media.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.media[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.media[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.media.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.back = function(){
  this.stop();
  this.nowPlayingIndex--;
  if(this.nowPlayingIndex < 0){
    this.nowPlayingIndex = this.media.length-1;
  }
  this.play();
}

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.media.length; i++){
    list.innerHTML += this.media[i].toHTML();
  }
};
