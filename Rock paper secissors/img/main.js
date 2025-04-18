const cpuChoice = ["rock", "paper", "scissors"];
let userChoice = "";
const buttons = document.querySelectorAll(".user > img");
const userImg = document.querySelector(".user-choice");
const cpuImg = document.querySelector(".cpu-choice");
const message = document.querySelector(".winner");
const cpuScoreMsg = document.querySelector(".cpu-score");
const userScoreMsg = document.querySelector(".user-score");
let prevIndex = null;
let cpuScore = 0;
let userScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.src.includes("rock")) {
      userChoice = "rock";
    } else if (button.src.includes("paper")) {
      userChoice = "paper";
    } else {
      userChoice = "scissors";
    }

    userImg.src = button.src;

    checkWinner();
  });
});

const checkWinner = () => {
  let randomIndex = Math.floor(Math.random() * cpuChoice.length);
  if (prevIndex === randomIndex) {
    randomIndex = Math.floor(Math.random() * cpuChoice.length);

    prevIndex = randomIndex;
  }

  const cpu = cpuChoice[randomIndex];

  cpuImg.src = `${cpu}.png`;
  const options = userChoice + cpu;
  console.log(options);

  switch (options) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      message.innerText = "USER WIN ";
      userScore++;
      userScoreMsg.innerText = userScore;
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      message.innerText = "DRAW";
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      message.innerText = "LOSE";
      cpuScore++;
      cpuScoreMsg.innerText = cpuScore;
      break;

    default:
      message.innerText = "ERROR";
  }
};
