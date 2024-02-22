function getRandomInt(max){
    return Math.floor(Math.random()*max)
}

function convertInt(){
    if (computerInt === 0){
        return "rock";
    }

    else if(computerInt === 1){
        return "paper"
    }
    else if(computerInt === 2){
        return "scissors"
    }
}
 function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors" ||playerSelection === "paper" && computerSelection === "rock"
    ||playerSelection==="scissors" && computerSelection === "paper"){
        console.log("winner is player")
    }
    else if (playerSelection === computerSelection){
        console.log("Tie!")
    }
    else{
        console.log("computer is the winner")
    }
 }


let computerInt = getRandomInt(3)

let computerChoice = convertInt()
console.log(computerChoice)

let playerChoice = prompt("Would you like to choose rock, paper or scissors?")
console.log(playerChoice.toLowerCase())

playRound(playerChoice.toLowerCase(), computerChoice)