var questions = [
  {
    pregunta: '¿Quién compuso esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/Batman89-theme.flac"></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "Hans Zimmer",
    opcionB: "John Williams",
    opcionC: "Danny Elfman",
    respuesta: "C"
  },
  {
    pregunta: '¿A qué película pertenece esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/BackToTheFuture-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "Indiana Jones",
    opcionB:"Back To The Future",
    opcionC: "Jurassic Park",
    respuesta: "B",
  },
  {
    pregunta: "¿Qué BSO pertenece a Star Wars?",
    opcionA: '<audio id= "myAudio10Audio" src="./MoviesClips/ET-theme.flac"></audio></audio><button id= "myAudio10" onclick="togglePlay(event)">PLAY</button>',
    opcionB:'<audio id= "myAudio11Audio" src="./MoviesClips/Superman70-theme.flac"></audio></audio><button id= "myAudio11" onclick="togglePlay(event)">PLAY</button>',
    opcionC:'<audio id= "myAudio12Audio" src="./MoviesClips/StarWars-theme.flac"></audio></audio><button id= "myAudio12" onclick="togglePlay(event)">PLAY</button>',
    respuesta: "C",
  },
  {
    pregunta: '¿De qué película es esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/RequiemForADream-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "The Fountain",
    opcionB:"Memento",
    opcionC:"Requiem for a Dream",
    respuesta: "C"
  },
  {
    pregunta: '¿A quién pertenece esta BSO de Superman? <audio id= "playAudioAudio" src="./MoviesClips/Superman10-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "Hans Zimmer",
    opcionB:"John Williams",
    opcionC:"Alan Silvestri",
    respuesta: "A"
  },
  {
    pregunta: "¿Qué BSO no pertenece a Hans Zimmer?",
    opcionA: '<audio id= "myAudio4Audio" src="./MoviesClips/PiratesOfCaribbean-theme.flac"></audio></audio><button id= "myAudio4" onclick="togglePlay(event)">PLAY</button>',
    opcionB:'<audio id= "myAudio5Audio" src="./MoviesClips/TheRock-theme.flac"></audio></audio><button id= "myAudio5" onclick="togglePlay(event)">PLAY</button>',
    opcionC:'<audio id= "myAudio6Audio" src="./MoviesClips/Terminator-theme.flac"></audio></audio><button id= "myAudio6" onclick="togglePlay(event)">PLAY</button>',
    respuesta: "C"
  },
  {
    pregunta: '¿Quién es el compositor de esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/ThePinkPanther-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "Henry Mancini",
    opcionB:"Nino Rota",
    opcionC:"Ennio Morricone",
    respuesta: "A"
  },
  {
    pregunta: '¿A qué película pertenece esta BSO? <audio id= "playAudioAudio" src="./MoviesClips/KillBill-theme.flac"></audio></audio><button id= "playAudio" onclick="togglePlay(event)">PLAY</button>',
    opcionA: "Reservoir Dogs",
    opcionB:"Pull Fiction",
    opcionC:"Kill Bill",
    respuesta: "C"
  },
  {
    pregunta: "¿Qué BSO no pertenece a Ennio Morricone?",
    opcionA: '<audio id= "myAudio7Audio" src="./MoviesClips/TheGodfather-theme.flac"></audio></audio><button id= "myAudio7" onclick="togglePlay(event)">PLAY</button>',
    opcionB:'<audio id= "myAudio8Audio" src="./MoviesClips/TheMission-theme.flac"></audio></audio><button id= "myAudio8" onclick="togglePlay(event)">PLAY</button>',
    opcionC:'<audio id= "myAudio9Audio" src="./MoviesClips/TheUntouchables-theme.flac"></audio></audio><button id= "myAudio9" onclick="togglePlay(event)">PLAY</button>',
    respuesta: "A"
  },
  {
    pregunta: "¿Qué BSO no pertenece a Basil Poledouris?",
    opcionA: '<audio id= "myAudio1Audio" src="./MoviesClips/TotalRecall-theme.flac" controls></audio></audio><button id= "myAudio1" onclick="togglePlay(event)">PLAY</button>',
    opcionB:'<audio id= "myAudio2Audio" src="./MoviesClips/Conan-theme.flac" controls></audio></audio><button id= "myAudio2" onclick="togglePlay(event)">PLAY</button>',
    opcionC:'<audio id= "myAudio3Audio" src="./MoviesClips/Robocop-theme.flac"controls></audio></audio><button id= "myAudio3" onclick="togglePlay(event)">PLAY</button>',
    respuesta: "A"
  }
];

var finalQuestion = [
  {
    pregunta: "Ronda Final: Ordena esta BSO arrastrando en su casilla correcta",
    opcionA: '<audio id= "myAudio13Audio" src="./MoviesClips/ImperialMarch3-theme.flac"></audio></audio><button id= "myAudio13" onclick="togglePlay(event)">PLAY</button>',
    opcionB: '<audio id= "myAudio14Audio" src="./MoviesClips/ImperialMarch5-theme.flac"></audio></audio><button id= "myAudio14" onclick="togglePlay(event)">PLAY</button>',
    opcionC: '<audio id= "myAudio15Audio" src="./MoviesClips/ImperialMarch4-theme.flac"></audio></audio><button id= "myAudio15" onclick="togglePlay(event)">PLAY</button>',
    opcionD: '<audio id= "myAudio16Audio" src="./MoviesClips/ImperialMArch1-theme.flac"></audio></audio><button id= "myAudio16" onclick="togglePlay(event)">PLAY</button>',
    opcionC: '<audio id= "myAudio17Audio" src="./MoviesClips/ImperialMarch2-theme.flac"></audio></audio><button id= "myAudio17" onclick="togglePlay(event)">PLAY</button>',
    respuestaA: "A",
    respuestaB: "B",
    respuestaC: "C",
    respuestaD: "D",
    respuestaE: "E"
  }
];