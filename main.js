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

let computerInt = getRandomInt(3)

let getComputerChoice = convertInt()
console.log(getComputerChoice)

let getPlayerChoice = prompt("Would you like to choose rock, paper or scissors?")
console.log(getPlayerChoice.toLowerCase())
