var clasification = new Clasification();

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


