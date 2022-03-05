function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function computerPlay(){
    var computerNumber = getRandomInt(0, 3)
    var computerChoice
    if(computerNumber == 0){
        computerChoice = "Rock"
    }
    else if (computerNumber == 1){
        computerChoice = "Paper"
    }
    else{
        computerChoice = "Scissors"
    }
    return computerChoice

}

function playerInput(){
    var playerNumber = prompt("Choose your weapon champion! 0 = Rock, 1 = Paper, 2 = Scissors")
    var playerChoice
    if(playerNumber == 0){
        playerChoice = "Rock"
    }
    else if (playerNumber == 1){
        playerChoice = "Paper"
    }
    else{
        playerChoice = "Scissors"
    }
    return playerChoice
}

function playRound(computerChoice, playerChoice){
    var result

    if(computerChoice == playerChoice){
        result = "Draft"
        console.log(result)
        return result
    }

    else if(computerChoice=="Rock" && playerChoice== "Paper"){
        result = "Player wins"
        console.log(result)
        return result
    }

    else if(computerChoice=="Rock" && playerChoice== "Scissors"){
        result = "Computer wins"
        console.log(result)
        return result
    }

    else if(computerChoice=="Paper" && playerChoice== "Scissors"){
        result = "Player wins"
        console.log(result)
        return result
    }

    else if(computerChoice=="Paper" && playerChoice== "Rock"){
        result = "Computer wins"
        console.log(result)
        return result
    }
    else if(computerChoice=="Scissors" && playerChoice== "Paper"){
        result = "Computer wins"
        console.log(result)
        return result
    }

    else if(computerChoice=="Scissors" && playerChoice== "Rock"){
        result = "Player wins"
        console.log(result)
        return result
    }
}

playRound(computerPlay(), playerInput())