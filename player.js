// je me connecter à la collection
let playersCollection = db.collection("players");

// création des variables
// tous les joueurs qu'on va récupérer de la base de données
let allPlayers = {};
// l'id du player en cours
let playerId;
// le nom du joueur
let playerName = "";
// le score du joueur 
let playerScore = 0;

function getOrCreatePlayerId() {
  // cette fonction permet de créer une session pour le joueur qui se connecte à la page
  // deux situations :
  // 1°: s'il n'y a pas de cookie 'playerId' présent, on génére un nouvel id de session et on le met dans le cookie 'playerId'
  // 2°: sinon, on récupère le cookie existant
  // dans tous les cas, l'id du joueur est stocké dans playerId
  playerId = localStorage.getItem("playerId");
  if (!playerId) {
    playerId = uuidv4();
    localStorage.setItem("playerId", playerId);
  }
}

getOrCreatePlayerId();

function createPlayer() {
  playerName = nameInput.value;
  
  updatePlayer()
}

function addScore() {
  playerScore = playerScore + 1;
  
  updatePlayer()
}

// on met à jour le player dans la base firestore
function updatePlayer() {
  playersCollection.doc(playerId).set({
    name: playerName,
    score: playerScore
  });
}