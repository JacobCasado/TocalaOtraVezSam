var chronometre = new Chronometre();

function renderQuestion() {
  
  var sum = (parseInt(correct) / parseInt(chronometre.counterSec)) * 100;
  quiz = document.getElementById("quiz");
  if (pos >= questions.length) {
    quiz.innerHTML =
      "<h2>Has tenido " +
      correct +
      " de " +
      questions.length +
      " respuestas correctas" +
      "tus puntuación es " +
      sum +
      "</h2>";
    document.getElementById("quizStatus").innerHTML = "¡¡¡Quiz Completado!!!";
    /* pos = 0;
    correct = 0; */
    /* if (correct >= 5) {
      console.log("mas de 5");
      return (_("quiz").innerHTML = "<button id= 'bonus'>BONUS</button>");
    } */
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
      "<input type= 'radio' name = 'choices' value = 'A'> " + chA + "<br>";
    quiz.innerHTML +=
      "<input type= 'radio' name = 'choices' value = 'B'> " + chB + "<br>";
    quiz.innerHTML +=
      "<input type= 'radio' name = 'choices' value = 'C'> " + chC + "<br>";
    quiz.innerHTML += "<button onclick = 'checkAnswer()'>Siguiente</button>";
  } else {
    document.getElementById("quizStatus").innerHTML =
      "Pregunta " + (pos + 1) + " de " + questions.length;
    question = questions[pos].pregunta;
    chA = questions[pos].opcionA;
    chB = questions[pos].opcionB;
    chC = questions[pos].opcionC;
    quiz.innerHTML = "<h3>" + question + "</h3>";
    quiz.innerHTML +=
      "<input type= 'radio' name = 'choices' value = 'A'> " +
      "<audio controls id= 'playAudioAudio' src= " +
      chA +
      ">" +
      "<br>";
    quiz.innerHTML +=
      "<input type= 'radio' name = 'choices' value = 'B'> " +
      "<audio controls id= 'playAudioAudio' src= " +
      chB +
      ">" +
      "<br>";
    quiz.innerHTML +=
      "<input type= 'radio' name = 'choices' value = 'C'> " +
      "<audio controls id= 'playAudioAudio' src= " +
      chC +
      ">" +
      "<br>";
    quiz.innerHTML += "<button onclick = 'checkAnswer()'>Siguiente</button>";
  }

  // _("quizStatus").innerHTML = "¡¡¡Bonus!!!";
  // question = finalQuestion[pos][0];
  // chA = finalQuestion[pos][1];
  // chB = finalQuestion[pos][2];
  // chC = finalQuestion[pos][3];
  // chD = finalQuestion[pos][4];
  // chE = finalQuestion[pos][5];
  // quiz.innerHTML +=
  document.addEventListener("DOMContentLoaded", () => {
    let elements = [];
    let container = document.querySelector("#container");
    // Add each row to the array
    container.querySelectorAll(".row").forEach(el => elements.push(el));
    // Clear the container
    container.innerHTML = "";
    // Sort the array from highest to lowest
    elements.sort(
      (a, b) =>
        b.querySelector(".score").textContent -
        a.querySelector(".score").textContent
    );
    // Put the elements back into the container
    elements.forEach(e => container.appendChild(e));
  });
}
var person = prompt("Por favor escribe tu nombre", "Cataracker de las BSO's");
