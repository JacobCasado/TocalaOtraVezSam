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

var questions = [
  [
    '¿Quién compuso esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/Batman89-theme.flac"></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "Hans Zimmer",
    "John Williams",
    "Danny Elfman",
    "C"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/BackToTheFuture-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "Indiana Jones",
    "Back To The Future",
    "Jurassic Park",
    "B"
  ],
  [
    "¿Qué BSO no pertenece a Basil Poledouris?",
    '<audio id= "myAudio1Audio" src="./MoviesClips/TotalRecall-theme.flac" controls></audio></audio><button id= "myAudio1" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio2Audio" src="./MoviesClips/Conan-theme.flac" controls></audio></audio><button id= "myAudio2" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio3Audio" src="./MoviesClips/Robocop-theme.flac"controls></audio></audio><button id= "myAudio3" onclick="togglePlay(event)">PLAY</button>',
    "A"
  ],
  [
    '¿De qué película es esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/RequiemForADream-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "The Fountain",
    "Memento",
    "Requiem for a Dream",
    "C"
  ],
  [
    '¿A quién pertenece esta BSO de Superman? <audio id= "playAudioAudio" src="./MoviesClips/Superman10-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "Hans Zimmer",
    "John Williams",
    "Alan Silvestri",
    "A"
  ],
  [
    "¿Qué BSO no pertenece a Hans Zimmer?",
    '<audio id= "myAudio4Audio" src="./MoviesClips/PiratesOfCaribbean-theme.flac"></audio></audio><button id= "myAudio4" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio5Audio" src="./MoviesClips/TheRock-theme.flac"></audio></audio><button id= "myAudio5" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio6Audio" src="./MoviesClips/Terminator-theme.flac"></audio></audio><button id= "myAudio6" onclick="togglePlay(event)">PLAY</button>',
    "C"
  ],
  [
    '¿Quién es el compositor de esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/ThePinkPanther-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "Henry Mancini",
    "Nino Rota",
    "Ennio Morricone",
    "A"
  ],
  [
    '¿A qué película pertenece esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/KillBill-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    "Reservoir Dogs",
    "Pull Fiction",
    "Kill Bill",
    "C"
  ],
  [
    "¿Qué BSO no pertenece a Ennio Morricone?",
    '<audio id= "myAudio7Audio" src="./MoviesClips/TheGodfather-theme.flac"></audio></audio><button id= "myAudio7" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio8Audio" src="./MoviesClips/TheMission-theme.flac"></audio></audio><button id= "myAudio8" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio9Audio" src="./MoviesClips/TheUntouchables-theme.flac"></audio></audio><button id= "myAudio9" onclick="togglePlay(event)">PLAY</button>',
    "A"
  ],
  [
    "¿Qué BSO pertenece a Star Wars?",
    '<audio id= "myAudio10Audio" src="./MoviesClips/ET-theme.flac"></audio></audio><button id= "myAudio10" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio11Audio" src="./MoviesClips/Superman70-theme.flac"></audio></audio><button id= "myAudio11" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio12Audio" src="./MoviesClips/StarWars-theme.flac"></audio></audio><button id= "myAudio12" onclick="togglePlay(event)">PLAY</button>',
    "C"
  ]
];

var finalQuestion = [
  [
    "Ronda Final: Ordena esta BSO arrastrando en su casilla correcta",
    '<audio id= "myAudio13Audio" src="./MoviesClips/ImperialMarch3-theme.flac"></audio></audio><button id= "myAudio13" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio14Audio" src="./MoviesClips/ImperialMarch5-theme.flac"></audio></audio><button id= "myAudio14" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio15Audio" src="./MoviesClips/ImperialMarch4-theme.flac"></audio></audio><button id= "myAudio15" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio16Audio" src="./MoviesClips/ImperialMArch1-theme.flac"></audio></audio><button id= "myAudio16" onclick="togglePlay(event)">PLAY</button>',
    '<audio id= "myAudio17Audio" src="./MoviesClips/ImperialMarch2-theme.flac"></audio></audio><button id= "myAudio17" onclick="togglePlay(event)">PLAY</button>',
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
