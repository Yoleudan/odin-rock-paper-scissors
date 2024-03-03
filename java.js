function getComputerSelection(max){
    let randomNumber = Math.floor(Math.random()*max)
    if (randomNumber === 0){
        return "rock";
    }

    else if(randomNumber === 1){
        return "paper"
    }
    else if (randomNumber === 2){
        return "scissors"
    }
}

function getPlayerSelection(){
    let playerSelection = prompt("Please choose rock, paper or scissors")
    return playerSelection.toLowerCase()
}

function getRoundWinner(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock"||
    playerSelection==="scissors" && computerSelection === "paper"){
        console.log("player wins")
        console.log("Player Score:" + ++playerScore)
        console.log("Computer Score:"+ computerScore)
    }
    else if (playerSelection === computerSelection){
        console.log("Tie!")
        console.log("Player Score:" + playerScore)
        console.log("Computer Score:" + computerScore)
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"||
    computerSelection === "scissors" && playerSelection === "paper"||
    computerSelection === "paper" && playerSelection === "rock"){
        console.log("computer wins")
        console.log("Player Score:" + playerScore)
        console.log("Computer Score:" + ++computerScore)
    }
}

function playRound(){
    let computerChoice = getComputerSelection(3)
    let playerChoice = getPlayerSelection()
    console.log("Player:"+playerChoice)
    console.log("Computer:"+computerChoice)
    getRoundWinner(playerChoice, computerChoice)
}

function getMatchWinner(){
    if (playerScore > computerScore){
        alert("Player Wins")
    }
    else if (computerScore > playerScore){
        alert("Computer Wins")
    }
    else{
        alert("its a tie")
    }
}
 let result = document.querySelector('#results')

 let rock = document.querySelector('#rock')
 rock.addEventListener('click', function(){
    getRoundWinner("rock", getComputerSelection(3))
 });

 let paper = document.querySelector('#paper')
 paper.addEventListener('click', function(){
    getRoundWinner("paper", getComputerSelection(3))
 });

 let scissors = document.querySelector('#scissors')
 scissors.addEventListener('click', function(){
    getRoundWinner("scissors", getComputerSelection(3))
 });

/*function playGame(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    getMatchWinner()

}*/
let playerScore = 0
let computerScore = 0

//playGasme();