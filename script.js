console.log("Hello!");

// rock paper scissors game - player vs computer

function getComputerChoice(){
    // randomly returns rock, paper, or scissors

    let choice = "";
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    // take user input
    // return rock, paper, or scissors

    let choice = prompt("Please choose rock, paper, or scissors:");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(human,computer) {
    // compare human choice vs computer choice
    // paper beats rock, rock beats scissors, scissors beats paper
    // declare winner
    // increase score

    let choiceOne = human;
    let choiceTwo = computer;

    console.log("You picked " + choiceOne);
    console.log("The computer picked " + choiceTwo);

    // rock = 0, paper = 1, scissors = 2

    switch (human) {
        case "rock":
            choiceOne = 0;
            break;
        case "paper":
            choiceOne = 1;
            break;
        case "scissors":
            choiceOne = 2;
            break;
    }

    switch (computer) {
        case "rock":
            choiceTwo = 0;
            break;
        case "paper":
            choiceTwo = 1;
            break;
        case "scissors":
            choiceTwo = 2;
            break;
    }

    // if human == computer then tie
    // if human > computer then win - true unless 0 > 2
    // if human < computer then lose - true unless 2 < 0
    // if human + computer = 2 and human is not 1
    if (choiceOne == choiceTwo) {
        console.log("You and the computer tied!");
    } else if ((choiceOne + choiceTwo) == 2 && choiceOne != 1) {
        if (choiceOne == 0) {
            console.log("You win! The computer loses!");
            humanScore++;
        } else {
            console.log("You lose! The computer wins!");
            computerScore++;
        }
    } else {
        if (choiceOne > choiceTwo) {
            console.log("You win! The computer loses!");
            humanScore++;
        } else {
            console.log("You lose! The computer wins!");
            computerScore++;
        }
    }

    console.log("Your score is now " + humanScore);
    console.log("The computer's score is now " + computerScore);
}

function playGame() {
    // play 5 rounds
    // track and compare score
    // declare winner

    for (let i = 0; i < 5; i++){
        console.log("Round " + (i + 1));
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    console.log("That's the end!");
    console.log("You won " + humanScore + " rounds.");
    console.log("The computer won " + computerScore + " rounds.");
    if (humanScore < computerScore){
        console.log("You lost! :(");
    } else if (humanScore > computerScore) {
        console.log("You won! :)");
    } else {
        console.log("You tied!");
    }
}

console.log("Let's play Rock, Paper, Scissors!");
playGame();