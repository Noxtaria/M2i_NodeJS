import readline from "readline"
import {stdin, stdout } from "process"

// Initialisation du Tableau

const size = 3; 
const board = [];

for (let i = 0; i < size; i++) {
  const row = [];
  for (let j = 0; j < size; j++) {
    row.push(" ");
  }
  board.push(row);
}

for (let i = 0; i < size; i++) {
  console.log(board[i]);
}

// Création de l'interface

const poserUneQuestion = async (question) => {
    console.log(question)
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close()
    return result
}

// Récupérer les réponses de l'utilisateur

let choixJoueur = () => {
    const row = poserUneQuestion("Merci de saisir la position X : ")
    const col = poserUneQuestion("Merci de saisir la position Y : ")
}



