let playerScore = 0
let computerScore = 0

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
        //console.log("player wins")//
        roundWin.textContent=('Player Wins!')
        scores.textContent=('Player:'+ ++playerScore + ' Computer:' + computerScore)
        getMatchWinner();
        //console.log("Player Score:" + ++playerScore)
        //console.log("Computer Score:"+ computerScore)
    }
    else if (playerSelection === computerSelection){
        //console.log("Tie!")//
        roundWin.textContent=('Tie!')
        scores.textContent=('Player' + playerScore + ' Computer' + computerScore)
        getMatchWinner();
        //console.log("Player Score:" + playerScore)
        //console.log("Computer Score:" + computerScore)
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"||
    computerSelection === "scissors" && playerSelection === "paper"||
    computerSelection === "paper" && playerSelection === "rock"){
        //console.log("computer wins")//
        roundWin.textContent=('Computer Wins!')
        scores.textContent=('Player:'+ playerScore + ' Computer' + ++computerScore)
        getMatchWinner();
        //console.log("Player Score:" + playerScore)
        //console.log("Computer Score:" + ++computerScore)
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
    if (playerScore >= 5){
        alert('You Won!')
        playerScore = 0
        computerScore = 0;
    }
    else if (computerScore >= 5){
        alert('You Lost!')
        playerScore = 0
        computerScore = 0;
    }
}

 const result = document.querySelector('#results')
 const roundWin = document.createElement('p')
 roundWin.classList.add('roundWin')
 roundWin.textContent=('')
 result.appendChild(roundWin)

 const scores = document.createElement('p')
 scores.classList.add('scores')
 scores.textContent=('')
 result.appendChild(scores);

 const matchWin = document.createElement('h1')
 matchWin.classList.add('matchWin')
 matchWin.textContent=('')
 result.appendChild(matchWin)

 let rock = document.querySelector('#rock')
 rock.addEventListener('click', function(){
    getRoundWinner("rock", getComputerSelection(3));
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


//playGasme();