
// initialise constants
const choices = {rock: 0, paper: 1, scissors: 2};
const images = {rock: "/img/rock2.png",
  paper: "/img/paper2.png",
  scissors: "/img/scissors2.png"
};
const resultOptions = ["You lose!", "You win!", "It's a tie!"];

// initialise variables
var tracker = {game_in_progress: false};
var result;

// setup DOM selections
const startButton = document.querySelector('.btn');
const rpsButtons = document.querySelectorAll('.rps');
const commentary = document.querySelector('.commentary');
const playerChoiceImage = document.querySelector('#player-choice');
const computerChoiceImage = document.querySelector('#computer-choice');
const scores = document.querySelectorAll('.score');

// add event listeners
startButton.addEventListener('click', () => initializeGame());

rpsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (tracker.game_in_progress) {
      playRound(button.id);
    };
  });
});

function initializeGame() {
  commentary.textContent = "First to 5, game on!"
  tracker = {game_in_progress: true,
    rounds_played: 0,
    player: 0,
    computer: 0,
    results: []
  };
  updateScores();
};

function updateScores() {
  scores[0].textContent = tracker.player;
  scores[1].textContent = tracker.computer;
  if (tracker.player > tracker.computer) {
    console.log("blah");
    scores[0].style.color = "green";
    scores[1].style.color = "red";
  } else if (tracker.rounds_played == 0) {
    scores[0].style.color = "lightgrey";
    scores[1].style.color = "lightgrey";
  } else if (tracker.player == tracker.computer) {
    scores[0].style.color = "orange";
    scores[1].style.color = "orange";
  } else {
    scores[1].style.color = "green";
    scores[0].style.color = "red";
  };
}

// select a choice randomly (pseudo) from the options available
function computerPlay() {
  // var delay = 100;
  // for (var i=0; i<9; i++) {
  //   choice =  Object.keys(choices)[Math.floor(Math.random() * 3)];
  //   computerChoiceImage.src = images[choice];
  //   sleep(delay);
  //   if(i>5) {
  //     delay=300
  //   } else if(i>2) {
  //     delay=200
  //   };
  // };
  choice =  Object.keys(choices)[Math.floor(Math.random() * 3)];
  computerChoiceImage.src = images[choice];
  return choice;
}

// play a round
function playRound(playerChoice) {
  playerChoiceImage.src = images[playerChoice];
  computerChoice = computerPlay();
  // calculate result
  if (choices[playerChoice] == choices[computerChoice]) {
    result = 2;
  } else {
    switch (playerChoice) {
      case "rock":
        result = +(computerChoice == "scissors");
        break;
      case "paper":
        result = +(computerChoice == "rock");
        break;
      case "scissors":
        result = +(computerChoice == "paper");
        break;
      };
  };

  switch (result) {
    case 0:
      commentary.textContent = `${playerChoice} loses to ${computerChoice}`;
      result = "lose";
      tracker.computer++;
      break;
    case 1:
      commentary.textContent = `${playerChoice} beats ${computerChoice}`;
      result = "win";
      tracker.player++;
      break;
    case 2:
      commentary.textContent = `${playerChoice} draws against ${computerChoice}`;
      result = "draw";
      break;
  };

  tracker.results.push(result);
  tracker.rounds_played++;
  updateScores();
  console.log(tracker);
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};
