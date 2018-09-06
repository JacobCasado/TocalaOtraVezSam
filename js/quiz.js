window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    
    $('.game-intro').css('display','none');
    $('.game').css('display','block');
    chronometre.set();
    renderQuestion();
  };
};

