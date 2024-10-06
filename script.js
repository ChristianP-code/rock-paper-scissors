function getComputerChoice() {
let getRandomNbr = Math.floor(Math.random() * 3); 
// Returns a random number between 0-2 inclusive
switch(getRandomNbr) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors"
    }
}

function getHumanChoice() {
    let validInput = false;
    while (validInput === false) {
        let getInput = window.prompt("Make your choice! Type rock, paper, or scissors:"); 
            switch (getInput.toLowerCase()) {
                case "rock":
                    alert("You\'ve chosen rock!"); //need to change alerts to console.log
                    getInput = true;
                    return "rock";
                case "paper":
                    alert("You\'ve chosen paper!");
                    getInput = true;
                    return "paper";
                case "scissors":
                    alert("You\'ve chosen scissors!");
                    getInput = true;
                    return "scissors";    
                default:
                    alert("That\'s not quite right. Try typing rock, paper or scissors!");
            }
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let roundsRemaining = 5;
    let computerSelection;
    let humanSelection;

    function playRound(humanChoice, computerChoice) {

        // playRound returns a console message depending on outcome of the game logic
        // and increments the score variables as appropriate
        // RPS game logic:   
        // if human and computer choices are the same, it's a draw and no score increment
        // human rock vs comp scissors = win, so increment human score
        // human paper vs rock = win, so increment human score
        // human scissors vs paper = win, so increment human score
        // anything else is a human loss, so increment computer score
        
            if (humanSelection === computerSelection) {
                console.log(`It\'s a draw! You both chose ${humanSelection}!`);
            } else if (humanSelection === "rock" && computerSelection === "scissors") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`);
                humanScore++;
            } else if (humanSelection === "paper" && computerSelection === "rock"){
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`);
                humanScore++;
            } else if (humanSelection === "scissors" && computerSelection === "paper") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`);
                humanScore++;
            } else {
                console.log(`You lose! ${computerSelection} beats ${humanSelection}!`)
                computerScore++;
            }
        }
        
    while (roundsRemaining >= 1) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        roundsRemaining--;
        console.log(`Your score ${humanScore} : ${computerScore} Computer score`);
        console.log(`Number of rounds remaining: ${roundsRemaining}`);

    }
}

playGame();