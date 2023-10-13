let userChoice;
let computerChoice;

init();
generateChoice();
determineReuslt();

function init() {
  alert("Welcome to Rock, Paper, Scissors Game");
  userChoice = prompt(
    "Enter your choice (Rock: R/ Paper: P/ Scissors: S)"
  ).toUpperCase();

  while (userChoice !== "S" && userChoice !== "R" && userChoice !== "P") {
    alert("Invalid choice");
    userChoice = prompt("Enter your choice (Rock: R/ Paper: P/ Scissors: S)").toUpperCase();
  }
}

function generateChoice() {
  let generateNum = Math.floor(Math.random() * 3) + 1;
  console.log(generateNum);
  switch (generateNum) {
    case 1:
      computerChoice = "R";
      break;
    case 2:
      computerChoice = "P";
      break;
    case 3:
      computerChoice = "S";
    default:
      break;
  }
  console.log(computerChoice);
}

function determineReuslt() {
  console.log(userChoice, computerChoice);
  if (userChoice === computerChoice) {
    alert("Tie");
    return;
  }

  if (userChoice === "R") {
    switch (computerChoice) {
      case "S":
        alert("You wins");
        break;
      case "P":
        alert("Computer win");
        break;

      default:
        break;
    }
  }

  if (userChoice === "P") {
    switch (computerChoice) {
      case "S":
        alert("Computer win");
        break;
      case "R":
        alert("You win");
        break;

      default:
        break;
    }
  }

  if (userChoice === "S") {
    switch (computerChoice) {
      case "R":
        alert("Computer win");
        break;
      case "P":
        alert("You win");
        break;

      default:
        break;
    }
  }
}
