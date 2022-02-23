function save(item) {
  var playlistArray = getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("playlist");
  if (playlistArray != null) {
    for (var i = 0; i < playlistarray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = playlistarray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStorearray("playlist"); 
}

function getStorearray(key) {
  var playlistarray = localStorage.getItem(key);
  if (playlistarray == null || playlistarray == "”) { 
    playlistarray = new array();
  }
  else {
    playlistarray = JSON.parse(playlistarray);
  }
  return playlistarray;
}
