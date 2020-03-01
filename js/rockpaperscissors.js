
// initial setup of variables
var continueGame = "y";

//main while loop for the game
while (continueGame == "y") {

  // call the play function
  play();

  // play again code
  do  {
    continueGame = prompt("Do you wish to play again? (y/n)");
    if (continueGame != "n" && continueGame != "y") {
      console.log("Please enter 'y' or 'n' followed by enter");
    }
  }
  while (continueGame != "n" && continueGame != "y");

}

// code to play the game
function play() {

}
