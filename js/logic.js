var isPlaying = false;
function togglePlay(event) {
  var myAudio = document.getElementById(event.target.id + "Audio");
  console.log(myAudio);

  if (isPlaying) {
    myAudio.pause();
    isPlaying = false;
    document.getElementById(event.target.id).innerHTML = "PLAY";
  } else {
    myAudio.play();
    isPlaying = true;
    document.getElementById(event.target.id).innerHTML = "PAUSE";
  }
}

var pos = 0,
  quiz,
  quizStatus,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  chD,
  chE,
  correct = 0;

function checkAnswer() {
  console.log("entra");
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
