var pos = 0,
  quiz,
  quiz_status,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  correct = 0;
function playAudio() {
  var x = document.getElementById("myAudio");
  x.play();
}
function pauseAudio() {
  var x = document.getElementById("myAudio");
  x.pause();
}
var questions = [
  [
    '¿Quién compuso esta BSO? <audio id= "myAudio" src="./MoviesClips/Batman89-theme.flac" controls></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "Hans Zimmer",
    "John Williams",
    "Danny Elfman",
    "C"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "myAudio" src="./MoviesClips/BackToTheFuture-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "Indiana Jones",
    "Back To The Future",
    "Jurassic Park",
    "B"
  ],
  [
    "¿Qué BSO no pertenece a Basil Poledouris?",
    '<audio  id= "myAudio" src="./MoviesClips/TotalRecall-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/Conan-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/Robocop-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "A"
  ],
  [
    '¿De qué película es esta BSO? <audio id= "myAudio" src="./MoviesClips/RequiemForADream-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "The Fountain",
    "Memento",
    "Requiem for a Dream",
    "C"
  ],
  [
    '¿A quién pertenece esta BSO de Superman? <audio id= "myAudio" src="./MoviesClips/Superman10-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "Hans Zimmer",
    "John Williams",
    "Alan Silvestri",
    "A"
  ],
  [
    "¿Qué BSO no pertenece a Hans Zimmer?",
    '<audio id= "myAudio" src="./MoviesClips/PiratesOfCaribbean-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/TheRock-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/Terminator-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "C"
  ],
  [
    '¿Quién es el compositor de esta BSO? <audio id= "myAudio" src="./MoviesClips/ThePinkPanther-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "Henry Mancini",
    "Nino Rota",
    "Ennio Morricone",
    "A"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "myAudio" src="./MoviesClips/KillBill-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "Reservoir Dogs",
    "Pull Fiction",
    "Kill Bill",
    "C"
  ],
  [
    "¿Qué BSO no pertenece a Ennio Morricone?",
    '<audio id= "myAudio" src="./MoviesClips/TheGodfather-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/TheMission-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/TheUntouchables-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "A"
  ],
  [
    "¿Qué BSO pertenece a Star Wars?",
    '<audio id= "myAudio" src="./MoviesClips/ET-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/Superman70-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    '<audio id= "myAudio" src="./MoviesClips/StarWars-theme.flac" controls></audio></audio><button onclick= "playAudio()" type= "button" >PLAY</button><button onclick="pauseAudio()" type="button">PAUSE</button>',
    "C"
  ]
];
function _(x) {
  return document.getElementById(x);
}
function renderQuestion() {
  quiz = _("quiz");
  if (pos >= questions.length) {
    quiz.innerHTML =
      "<h2>Has tenido " +
      correct +
      " de " +
      questions.length +
      " respuestas correctas</h2>";
    _("quiz_status").innerHTML = "¡¡¡Quiz Completado!!!";
    pos = 0;
    correct = 0;
    return false;
  }
  _("quiz_status").innerHTML =
    "Pregunta " + (pos + 1) + " de " + questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  quiz.innerHTML = "<h3>" + question + "</h3>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'A'> " + chA + "<br>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'B'> " + chB + "<br>";
  quiz.innerHTML +=
    "<input type= 'radio' name = 'choices' value = 'C'> " + chC + "<br>";
  quiz.innerHTML += "<button onclick = 'checkAnswer()'>Comprueba</button>";
}
function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos][4]) {
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
