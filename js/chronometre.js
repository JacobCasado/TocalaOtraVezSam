function Chronometre() {
  this.counterSec = 0;
}

Chronometre.prototype.set = function() {
  counterMin = 0;
  sec = document.getElementById("seconds");
  min = document.getElementById("minutes");
  setInterval(
    function() {
      if (this.counterSec == 60) {
        this.counterSec = 0;
        counterMin++;
        min.innerHTML = counterMin;
        if (counterMin == 60) {
          counterMin = 0;
        }
      }
      this.counterSec++;
    }.bind(this),
    1000
  );
};
