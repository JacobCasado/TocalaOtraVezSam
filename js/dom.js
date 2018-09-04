function renderQuestion() {
  quiz = document.getElementById("quiz");
  if (pos >= questions.length) {
    quiz.innerHTML =
      "<h2>Has tenido " +
      correct +
      " de " +
      questions.length +
      " respuestas correctas</h2>";
    document.getElementById("quizStatus").innerHTML = "¡¡¡Quiz Completado!!!";
    /* pos = 0;
    correct = 0; */
    /* if (correct >= 5) {
      console.log("mas de 5");
      return (_("quiz").innerHTML = "<button id= 'bonus'>BONUS</button>");
    } */
    return false;
  }
  document.getElementById("quizStatus").innerHTML =
    "Pregunta " + (pos + 1) + " de " + questions.length;
  question = questions[pos].pregunta;
  chA = questions[pos].opcionA;
  chB = questions[pos].opcionB;
  chC = questions[pos].opcionC;
  quiz.innerHTML = "<h3>" + question + "</h3>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'A'> " + chA + "<br>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'B'> " + chB + "<br>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'C'> " + chC + "<br>";
  quiz.innerHTML += "<button onclick = 'checkAnswer()'>Siguiente</button>";

  // _("quizStatus").innerHTML = "¡¡¡Bonus!!!";
  // question = finalQuestion[pos][0];
  // chA = finalQuestion[pos][1];
  // chB = finalQuestion[pos][2];
  // chC = finalQuestion[pos][3];
  // chD = finalQuestion[pos][4];
  // chE = finalQuestion[pos][5];
  // quiz.innerHTML +=
}
