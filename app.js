let userScore = 0;
let compScore = 0;

const userS = document.querySelector("#user");
const compS = document.querySelector("#computer");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "Draw !";
    } else if ( (userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "papers")) {
        msg.innerText = "You Won !";
        userScore++;
        userS.innerText = userScore;
    } else {
        msg.innerText = "You Lost !";
        compScore++;
        compS.innerText = compScore;
    }
};
