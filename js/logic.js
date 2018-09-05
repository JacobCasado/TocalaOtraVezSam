//Lógica aciertos//
var pos = 0,
  quiz,
  quizStatus,
  question,
  choice,
  choices,
  musicQues,
  chA,
  chB,
  chC,
  chD,
  chE,
  correct = 0;

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      if (choices[i].value == questions[pos].respuesta) {
        correct++;
      }
    }
  }

  pos++;
  renderQuestion();
}
//variable audio//
var sound = document.createElement("audio");
sound.id = "playAudioAudio";
sound.controls = "controls";
sound.src = "";
sound.type = "audio/flac";
document.getElementById("quiz").appendChild(sound);

//contador//
var chronometre;

function Chronometre() {
  this.counterSec = 0;
}

function stop() {
  clearInterval(chronometre);
}
Chronometre.prototype.set = function() {
  counterMin = 0;
  sec = document.getElementById("seconds");
  min = document.getElementById("minutes");
  setInterval(function() {
    if (this.counterSec == 60) {
      this.counterSec = 0;
      counterMin++;
      min.innerHTML = counterMin;
      if (counterMin == 60) {
        counterMin = 0;
      }
    }
    console.log(this.counterSec)
    this.counterSec++
  }.bind(this), 1000);
}

//Clasificacion//











