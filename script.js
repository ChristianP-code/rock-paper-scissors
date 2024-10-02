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

function getHumanChoice() {
    let getInput = window.prompt("Make your choice! Type rock, paper, or scissors:");
    // check that user input matches one of the choices: rock, paper, scissors
    
        switch (getInput.toLowerCase()) {
            case "rock":
                alert("You\'ve chosen rock!");
                return "rock";
            case "paper":
                alert("You\'ve chosen paper!");
                return "paper";
            case "scissors":
                alert("You\'ve chosen scissors!");
                return "scissors";    
            default:
                alert("That\'s not quite right. Try typing rock, paper or scissors!");
            getHumanChoice();
        }
}

getHumanChoice();