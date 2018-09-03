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
// function playAudio() {
//   var x = document.getElementById("myAudio");
//   x.play();
// }
// function pauseAudio() {
//   var x = document.getElementById("myAudio");
//   x.pause();
// }
var isPlaying = false;
function togglePlay() {
  var myAudio = document.getElementById("myAudio");

  if (isPlaying) {
    myAudio.pause();
    isPlaying = false;
    document.getElementById("playAudio").innerHTML = "PAUSE";
  } else {
    myAudio.play();
    isPlaying = true;
    document.getElementById("playAudio").innerHTML = "PLAY";
  }
}

var questions = [
  [
    '¿Quién compuso esta BSO? <audio id= "myAudio" src="./MoviesClips/Batman89-theme.flac"></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "Hans Zimmer",
    "John Williams",
    "Danny Elfman",
    "C"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "myAudio" src="./MoviesClips/BackToTheFuture-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "Indiana Jones",
    "Back To The Future",
    "Jurassic Park",
    "B"
  ],
  [
    "¿Qué BSO no pertenece a Basil Poledouris?",
    '<audio  id= "myAudio" src="./MoviesClips/TotalRecall-theme.flac" controls></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" src="./MoviesClips/Conan-theme.flac" controls></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" src="./MoviesClips/Robocop-theme.flac"controls></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "A"
  ],
  [
    '¿De qué película es esta BSO? <audio id= "myAudio" hidden src="./MoviesClips/RequiemForADream-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "The Fountain",
    "Memento",
    "Requiem for a Dream",
    "C"
  ],
  [
    '¿A quién pertenece esta BSO de Superman? <audio id= "myAudio" hidden src="./MoviesClips/Superman10-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "Hans Zimmer",
    "John Williams",
    "Alan Silvestri",
    "A"
  ],
  [
    "¿Qué BSO no pertenece a Hans Zimmer?",
    '<audio id= "myAudio" hidden src="./MoviesClips/PiratesOfCaribbean-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/TheRock-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/Terminator-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "C"
  ],
  [
    '¿Quién es el compositor de esta BSO? <audio id= "myAudio" hidden src="./MoviesClips/ThePinkPanther-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "Henry Mancini",
    "Nino Rota",
    "Ennio Morricone",
    "A"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "myAudio" hidden src="./MoviesClips/KillBill-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "Reservoir Dogs",
    "Pull Fiction",
    "Kill Bill",
    "C"
  ],
  [
    "¿Qué BSO no pertenece a Ennio Morricone?",
    '<audio id= "myAudio" hidden src="./MoviesClips/TheGodfather-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/TheMission-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/TheUntouchables-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "A"
  ],
  [
    "¿Qué BSO pertenece a Star Wars?",
    '<audio id= "myAudio" hidden src="./MoviesClips/ET-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/Superman70-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/StarWars-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "C"
  ]
];

var finalQuestion = [
  [
    "Ronda Final: Ordena esta BSO arrastrando en su casilla correcta",
    '<audio id= "myAudio" hidden src="./MoviesClips/ImperialMarch3-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/ImperialMarch5-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/ImperialMarch4-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/ImperialMArch1-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    '<audio id= "myAudio" hidden src="./MoviesClips/ImperialMarch2-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay()">PLAY</button>',
    "A",
    "B",
    "C",
    "D",
    "E"
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
    _("quizStatus").innerHTML = "¡¡¡Quiz Completado!!!";
    pos = 0;
    correct = 0;
    return false;
  }
  _("quizStatus").innerHTML =
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
