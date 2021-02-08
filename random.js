// solution n°1

//function getRandomElement(list) {
  //return list[Math.floor(Math.random() * list.length)];
//

//getRandomElement(questions)

// solution n°2

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// on mélange
shuffleArray(questions)

// on prend les n premiers
let n = 20
let choosenQuestions = questions.slice(0, n)

console.log(choosenQuestions)
