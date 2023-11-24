const result = document.querySelector("#result");

//Function to get computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

//See if it works
//console.log(getComputerChoice()); // Should print 'rock', 'paper', or 'scissors'

//Function to determine winner
function playRound(playerSelection, computerSelection) {
  //When it's a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    //When computer wins
    if (computerSelection === "paper") {
      return "Computer wins!";
    } else {
      return "You win!"; //When player wins
    }
  } else if (playerSelection === "paper") {
    //When computer wins
    if (computerSelection === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!"; //When player wins
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Computer wins!"; //When computer wins
    } else {
      return "You win!"; //When player wins
    }
  }

}

//const playerSelection = "paper";
//const computerSelection = getComputerChoice();


//Function to play 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();