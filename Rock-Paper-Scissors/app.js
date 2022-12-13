const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let computer;
let player;
let result;

possibleChoices.forEach(button => button.addEventListener("click", (e) => {
         player = e.target.id;
         playerChoice.innerHTML = player;
         generatecomputerChoice();
         getResult();
}));

function generatecomputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1) {
        computer = "rock"
    }
    
    if(randomNumber == 2) {
        computer = "paper"
    }
    
    if(randomNumber == 3) {
        computer = "scissors"
    }
    computerChoice.innerHTML = computer;
};

function getResult(){
      if(computer == player){
        result = "draw"
      }
      if(computer == "rock" && player == "paper"){
        result = "you won"
      }

      if(computer == "rock" && player == "scissors"){
        result = "you lose"
      }

      if(computer == "paper" && player == "scissors"){
        result = "you won"
      }
      
      if(computer == "paper" && player == "rock"){
        result = "you lose"
      }
      
      if(computer == "scissors" && player == "rock"){
        result = "you won"
      }
      
      if(computer == "scissors" && player == "paper"){
        result = "you lose"
      }
      resultOutput.innerHTML = result;
};