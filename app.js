// Background animation (requires anime.js)
function randomValues() {
  anime({
    targets: ".square, .circle, .triangle",
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2);
    },
    duration: 5000,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
}

console.log("Hello World");

// Function to get the computer's random choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to get the human player's choice via prompt
function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors:");
  return choice ? choice.toLowerCase() : "";
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

// Returns the result string for the round and updates scores
function getRoundResult(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

// Play a 5-round game
function playGame() {
  humanScore = 0;
  computerScore = 0;
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = getRoundResult(humanSelection, computerSelection);

    // Summary alert now includes just the round, result, and score.
    const summary =
      `Round ${i + 1}:\n` +
      `${roundResult}\n` +
      `Score - You: ${humanScore}, Computer: ${computerScore}`;
    alert(summary);
  }

  // Final result
  let finalMessage = "Game Over!\n";
  if (humanScore > computerScore) {
    finalMessage += "Congratulations, you win the game!";
  } else if (humanScore < computerScore) {
    finalMessage += "Sorry, the computer wins the game!";
  } else {
    finalMessage += "The game is a tie!";
  }
  alert(finalMessage);
}

// Start the game and background animation
playGame();
randomValues();
