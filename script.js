// Sert à indiquer les différents éléments présents dans new Question

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

//Il faut qu'on mette toutes nos questions dans ce tableau

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
  new Question("En langage HTML, à quoi correspond une balise '<a>' ?", ["Une image","Un titre", "Une fonction", "Lien Hypertext"], "Lien Hypertext"),
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




// on mélange
shuffleArray(questions)

// on prend les n premiers
let n = 5
questions = questions.slice(0, n)

// début du paramétrage de notre quizz

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

      playerScore = this.score
      updatePlayer()
    }
    this.currentQuestionIndex++;

    restartTimer() 
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
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
      </br> <button onclick="window.location.href = 'score.html';" type="button" class="btn btn-dark"> Voir le classement </button>`;
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

// Logique du quizz
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  }
}

// Créer le quizz
let quiz = new Quiz(questions);
quizApp();




// fonction de la progressbar
var progressbar
var progressbarinner;

function createProgressbar(id, duration, callback) {
  progressbar = document.getElementById(id);
  progressbar.className = 'progressbar';

  progressbarinner = document.createElement('div');
  progressbarinner.className = 'inner';

  progressbarinner.style.animationDuration = duration;

  if (typeof(callback) === 'function') {
    progressbarinner.addEventListener('animationend', callback);
  }

  progressbar.appendChild(progressbarinner);

  progressbarinner.style.animationPlayState = 'running';
}

addEventListener('load', function() {
    createTimer()
});

function stopProgressbar() {
    progressbarinner.style.animationPlayState = "paused"
    progressbar.innerHTML = ""
}

function createTimer() {
    createProgressbar('progressbar', '12s', function() {
    alert('Game Over, tu as perdu !');
  });
}

function restartTimer() {
    stopProgressbar();
    createTimer()
}


//pop up des règles du jeu

function displayRules() {
  rules.style.display = "flex";
  formgroup.style.filter = "blur(3px)";
  buttonrules.style.filter = "blur(3px)";
}

function undisplayRules() {
  rules.style.display = "none";
  formgroup.style.filter = "none";
  buttonrules.style.filter = "none";
}
