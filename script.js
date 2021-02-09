class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

//Il faut qu'on mette toutes nos questions dans ce tableau//

let questions = [
  new Question("Le plombier moustachu le plus connu du monde s’appelle Mario. Quel est son nom origine ?", ["Jumpman", "Speedman", "Strongman", "Cartman"], "Jumpman"),
  new Question("Histoire Digitale: dans quel pays est né le World Wide Web?", ["France","Etats-Unis", "Suisse", "Chine"], "Suisse"),
  new Question("Quelle est la monnaie des sims ?", ["simcash","simflouz", "simspesos", "simsmoula"], "simflouz"),
  new Question("Dans quels flims peut-on entendre la citation : 'Un grand pouvoir implique de grande responsabilité'", ["Batman","Superman", "Black Panther", "Spider-Man"], "Spider-Man"),
  new Question("De quelle oeuvre la planète Namek fait-elle partie ?", ["Star Wars","Star Trek", "Dragon Ball", "Naruto"], "Dragon Ball"),
  new Question("'Wannabe' est le célèbre titre du groupe... ", ["Spice Girls", "Backstreet Boys", "Black Eye Peas", "U2"], "Spice Girls"),
  new Question("En quelle année est sortie la toute première PlayStation en France ?", ["1995","1994", "1997", "1998"], "1995"),
  new Question("Qui est le réalisateur du film Titanic ?", ["Steven Spielberg","Christopher Nolan", "James Cameron", "Georges Lucas"], "James Cameron"),
  new Question("Lequel de ces 4 noms, est celui d'un site populaire pour acheter et vendre ?", ["SeeBay","ReBay", "Ebay", "MeBay"], "Ebay"),
  new Question("Quelle actrice joue Hannah Montana ?", ["Mailey Cyrus","Selena Gomez", "Debby Ryan", "Ashley Tisdale"], "Mailey Cyrus"),
  new Question("Quel est l'ennemi juré de Sonic ?", ["Thanos","Docteur Robotnike", "Docteur Octopus", "Neo Cortex"], "Docteur Robotnike"),
  new Question("Sur quelle chaîne était diffusé le Club Dorothée ?", ["M6","France 5", "France 2", "TF1"], "TF1"),
  new Question("Comment s'appelle la ville où habite Bob L'éponge ?", ["Bikini Bossom","Bikini Tomtom", "Bikini Bottom", "Bikini Tossom"], "Bikini Bottom"),
  new Question("Quel film a connu le plus gros succès du box-office des années 90 ?", ["Pulp Fiction","Requiem For a Dream", "Forrest Gump", "Titanic"], "Titanic"),
  new Question("L'ESD c'est:", ["Créer, coder, développer","Créer, développer, coder", "Coder, développer, créer", "Développer, créer, coder"], "Créer, coder, développer"),
  new Question("En langage HTML, à quoi correspond une balise <a> ?", ["Une image","Un titre", "Une fonction", "Lien Hypertext"], "Lien Hypertext"),
  new Question("Quel format d'image permet d'avoir un fond transparent ?", [".jpeg",".png", ".gif", ".tif"], ".png"),
  new Question("Entre ces trois génies de l’informatique, qui est le plus riche ?", ["Steve Jobs","Mark Zuckerberg", "Bill Gates", "Elon Musk"], "Elon Musk"),
  new Question("Comment se nomme le premier Youtuber Français à avoir ses 10 Millions d’abonnés ?", ["Cyprien","Squeezie", "Norman", "Mister V"], "Cyprien"),
  new Question("Ctrl + Z ça vous parle ?", ["Hein ?!","Copier/Coller", "Retour arrière", "Couper/Coller"], "Retour arrière"),
  new Question("Un peu d'anglais: en webmarketing que signifie R.O.I. ?", ["Return on Island","Return on Investigation", "Return on Investment", "Aucune idée"], "Return on Investment"),
  new Question("Quel super-héros n’a pas eu droit à sa propre série sur Netflix ?", ["Dardevil","Iron fist", "Gambit", "Flash"], "Gambit"),
  new Question("Dans le film d’animation 'Là-haut', qu’utilisent les protagonistes pour s’envoler?", ["Une mongolfière ","De la magie", "Un dirigeable", "Des ballons d'hélium"], "Des ballons d'hélium"),
  new Question("De quelle faction Thor fait-il partie ?", ["Avengers","X-Men", "Les 4 fantastiques", "Les Winx"], "Avengers"),
  new Question("Quel est le moteur de recherche le plus utilisé dans le monde ?", ["Bing","Yahoo!","Google", "Qwant"], "Google"),
  new Question("L'application Tinder est connue pour ... ?", ["Noter les bières","Faire des rencontres", "Des recettes de cuisine", "Du e-commerce"], "Faire des rencontres"),
  new Question("A quel groupe appartient google ?", ["Facebook","Alphabet", "Youtube ", "Aucun des trois"], "Alphabet"),
  new Question("Air France est une entreprise ", ["Italienne","Francaise", "Allemande", "Américaine"], "Francaise"),
  new Question("Lequel de ces logiciels ne fais pas partie de la suite Adobe ?", ["Premiere Pro","After Effect", "InDesign", "Paint"], "Paint"),
  new Question("Quel réseaux social ne fait pas partie du groupe facebook ? ", ["Instagram","Messenger", "Snapchat", "WhatsApp"], "Snapchat"),
  new Question("Qui est le pdg d'apple ? ", ["Steve Jobs","Ronald Wayne", "Tim Cook", "Steve Wozniak"], "Tim Cook"),
  new Question("De quelle oeuvre la planète Namek fait-elle partie ?", ["Star Wars","Rick & Morty", "Star Trek", "Dragon ball"], "Dragon ball"),
  new Question("Quel est le fondateur de Microsoft ? ", ["Bill Gates","Elon Musk", "Steve Jobs", "Mark Zuckeberg"], "Bill Gates"),
  new Question("En quelle année est sorti le 1er Iphone ?", ["2006","2007", "2008", "2009"], "2007"),
  new Question("En 2016 qui était le PDG de Yahoo ?", ["Donald Trump","Bill Gates", "Ben Silberman", "Marissa Mayers"], "Marissa Mayers")

];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {
    endQuizHTML = `
      <h1>Bravo votre quiz est terminé !</h1>
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // affichage choix + prise en compte du choix
   for(let i = 0; i < choices.length; i++) {
     this.elementShown("choice" + i, choices[i]);
     guessHandler("guess" + i, choices[i]);
    }
    
  },
  
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  }
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();

//Reset le timer au temps dans la constante (a lancer en amont de la fonction timer)
function timeReset() {
  time_remaining = time;
}

// fonction du chrono

function createProgressbar(id, duration, callback) {
  var progressbar = document.getElementById(id);
  progressbar.className = 'progressbar';

  var progressbarinner = document.createElement('div');
  progressbarinner.className = 'inner';

  progressbarinner.style.animationDuration = duration;

  if (typeof(callback) === 'function') {
    progressbarinner.addEventListener('animationend', callback);
  }

  progressbar.appendChild(progressbarinner);

  progressbarinner.style.animationPlayState = 'running';
}

addEventListener('load', function() {
  createProgressbar('progressbar', '12s', function() {
    alert('Game Over, tu as perdu !');
  });
});


//pop up des règles du jeu

var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
  overlay.style.display='none';
}

//Timer de réponse max
/*const time = 10000;
let time_remaining = time;
function timer() {
  if (time_remaining >= 0) {
    myTimer = setInterval(function () {
      // alert(time_remaining = time_remaining - 10);
      time_remaining = time_remaining - 1000;
      $("#timer").text(time_remaining / 1000);
      if (time_remaining <= 0) {
        //Si le temps est écoulé
        bad();
        console.log("time over");
      }
    }, 1000);
  }
}
//Arrêter le timer (a lancer une fois que le timer est terminé / pendant l'action de fin du timer)
function myStopFunction() {
  clearTimeout(myTimer);
}
//Reset le timer au temps dans la constante (a lancer en amont de la fonction timer)
function timeReset() {
  time_remaining = time;
}
// timer() Mettre la fonction à l'endroit ou vous voulez lancer le timer
// myStopFunction() Mettre a l'endroit ou il faut arrêter le timer
// timeReset() //Mettre avant de lancer le timer*/