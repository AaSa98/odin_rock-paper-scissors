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
