
// constants for choices
const choices = {rock: 0, paper: 1, scissors: 2};
const continueOptions = {y: true, yes: true, n: false, no: false};
const resultOptions = ["You lose, better luck next time!", "You win, congratulations!", "Game is a tie!"];

main();

//main function to play the game
function main() {

  // initial setup of variables for playing the game
  var continueChoice = "y",
    playerSelection,
    computerSelection;

  // use a while loop to continue playing until user chooses to stop
  while (continueOptions[continueChoice]) {

    // take input from the player
    do {
      playerSelection = prompt("Please choose rock, paper or scissors (type the full word)").toLowerCase();
      // handle invalid selection with console output
      if (!(playerSelection in choices)) {
        console.log("Invalid choice, please type 'rock' or 'paper' or 'scissors'");
      }
    }
    // loops back to the start of the do-while loop if selection is invalid
    while (!(playerSelection in choices));

    // get the computer selection
    computerSelection = computerPlay();

    // simulate the game given the choices and output the result to the console
    outcome = playRound(playerSelection, computerSelection);
    console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`);
    console.log(resultOptions[outcome]);

    // play again code
    do  {
      continueChoice = prompt("Do you wish to play again? (y/n)");
      // handle invalid selection with console output
      if (!(continueChoice in continueOptions)) {
        console.log("Invalid choice, please enter 'y' or 'n' followed by enter");
      }
    }
    // loops back to the start of the do-while loop if selection is invalid
    while (!(continueChoice in continueOptions));

  }

}

// code to play the game
function playRound(playerSelection, computerSelection) {
  // calculate mathematical result for 0 = lose, 1 = win and 2 = draw (1st line calculates win/lose, 2nd line adds draws in)??

  // calulate result
  if (choices[playerSelection] == choices[computerSelection]) {
    result = 2;
  } else {
    switch (playerSelection) {
      case "rock":
        result = +(computerSelection == "scissors");
        break;
      case "paper":
        result = +(computerSelection == "rock");
        break;
      case "scissors":
        result = +(computerSelection == "paper");
        break;
      };
  };

  return result;
}

// code to generate computer's turn
function computerPlay() {
  return Object.keys(choices)[Math.floor(Math.random() * 3)];
}
