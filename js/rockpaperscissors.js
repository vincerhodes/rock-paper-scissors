
// initial setup of variables
var continue = "y";

//main while loop for the game
while (continue == "y") {

  // call the play function
  play();

  // play again code
  while (continue != "n" && continue != "y") {
    console.log("Do you wish to play again? (y/n)");
    continue = readline();
    if (continue != "n" && continue != "y") {
      console.log("Please enter 'y' or 'n' followed by enter");
    }
  }

}

// code to play the game
function play() {
  
}
