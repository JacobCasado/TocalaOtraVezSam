var chronometre = new Chronometre();

function renderQuestion() {
  var sum = ((parseInt(correct) / parseInt(chronometre.counterSec)) * 10000).toFixed(0);
  quiz = document.getElementById("quiz");
  if (pos >= questions.length) {
    quiz.innerHTML =
      "<h2>Has tenido " +
      correct +
      " de " +
      questions.length +
      " respuestas correctas." + "<br>" + "<br>" +
      "Tu puntuación es de " +
      sum + " puntos.</h2>";
    document.getElementById("quizStatus").innerHTML = "¡¡¡Quiz Completado!!!";
    var person = prompt(
      "Por favor escribe tu nombre",
      "Cataracker de las BSO's"
    );

    clasification.saveRecord(person, sum);
    clasification.render();
    
    return false;
  }

  if ("text" == questions[pos].type) {
    document.getElementById("quizStatus").innerHTML =
      "Pregunta " + (pos + 1) + " de " + questions.length;
    question = questions[pos].pregunta;
    musicQues = questions[pos].musicQuestion;
    chA = questions[pos].opcionA;
    chB = questions[pos].opcionB;
    chC = questions[pos].opcionC;
    quiz.innerHTML =
      "<h3>" +
      question +
      "</h3>" +
      "<audio controls id= 'playAudioAudio' src= " +
      musicQues +
      ">";
    quiz.innerHTML +=
      "<div class ='names'><input class= 'in' type= 'radio' name = 'choices' value = 'A'>" + chA + "</div>";
    quiz.innerHTML +=
      "<div class ='names'><input class= 'in' type= 'radio' name = 'choices' value = 'B'> " + chB + "</div>";
    quiz.innerHTML +=
      "<div class='names'> <input class= 'in' type= 'radio' name = 'choices' value = 'C'> " + chC + "</div>";
    quiz.innerHTML += "<button class= 'btn-quiz1' onclick = 'checkAnswer()'>Siguiente >></button>";
  } else {
    document.getElementById("quizStatus").innerHTML =
      "Pregunta " + (pos + 1) + " de " + questions.length;
    question = questions[pos].pregunta;
    chA = questions[pos].opcionA;
    chB = questions[pos].opcionB;
    chC = questions[pos].opcionC;
    quiz.innerHTML = "<h3>" + question + "</h3>";
    quiz.innerHTML +=
      "<div class='audio'><audio controls id= 'playAudioAudio' src='" +
      chA +
      "'></audio><input type='radio' name='choices' value='A'></div>";
    quiz.innerHTML +=
      "<div class='audio'>" +
      "<audio controls id= 'playAudioAudio' src= " +
      chB +
      "></audio><input type= 'radio' name = 'choices' value = 'B'></div>";
    quiz.innerHTML +=
      "<div class='audio'>" +
      "<audio controls id= 'playAudioAudio' src= " +
      chC +
      "></audio><input type= 'radio' name = 'choices' value = 'C'> </div>";
    quiz.innerHTML += "<button class= 'btn-quiz2' onclick = 'checkAnswer()'>Siguiente >></button>";
  }

}
