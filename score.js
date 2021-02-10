function getBestScores() {
    let bestScores = db.collection("players").orderBy("score", "desc").limit(10);
  
    playerPseudoDisplay.innerHTML = "";
    playerScoreDisplay.innerHTML = "";
  
    bestScores.onSnapshot(function (snapshot) {
      snapshot.forEach(function (doc) {
        let data = doc.data();
        playerPseudoDisplay.innerHTML += "<div>" + data.name + " " + data.score + "</div>";
        //playerScoreDisplay.innerHTML += "</div>" + data.score + "</div>";
        console.log(data);
      });
    });
  }
  
  getBestScores();