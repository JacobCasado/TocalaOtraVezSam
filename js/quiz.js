window.onload = function() {
  var music = new Audio("./MoviesClips/LOTR-theme.flac")
  music.loop = true;
  music.play();
  document.getElementById("start-button").onclick = function() {
    
    music.pause();
    $('.game-intro').css('display','none');
    $('.game').css('display','block');
    chronometre.set();
    renderQuestion();
  };
};

