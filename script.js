// this function should return a string of either: rock, paper or scissors

function getComputerChoice() {
let getRandomNbr = Math.floor(Math.random() * 3); 
// Returns a random number between 0-2 inclusive
switch(getRandomNbr) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors"
    }
//console.log(getRandomNbr);
}
getComputerChoice();