
// initial setup of variables
var continueGame = "y";

//main while loop for the game
while (continueGame == "y") {

  // call the play function
  play();

  // play again code
  while (continueGame != "n" && continueGame != "y") {
    console.log("Do you wish to play again? (y/n)");
    continueGame = readline();
    if (continueGame != "n" && continueGame != "y") {
      console.log("Please enter 'y' or 'n' followed by enter");
    }
  }

}

// code to play the game
function play() {

}
