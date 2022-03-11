
const output_field = document.getElementById("output_text");

//Erzeugt random Zahl von min - max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
//Spielzug des Computers, diese Funktion ruft getRandomInt() auf und ordnet Zahl von 0-2 entsprechend Schere, Stein oder Papier zu
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
//Funktion des Spielerinputs, in Fenster wird Spieler aufgefordert Zahl von 0-2 einzugeben, diese wird entsprechender "Waffe" zugeordnet. (Siehe computerPlay)
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
//Funktion, die eine Runde SSP spielt, indem computerPlay() und playerInput() aufgerufen wird und je nach return-Wert beider Funktionen der Gewinner festgesstellt wird
function playRound(computerChoice, playerChoice){
    var result

    if(computerChoice == playerChoice){
        result = "Draft!"
        console.log(result)
        output_field.textContent = result;
        return result
    }

    else if(computerChoice=="Rock" && playerChoice== "Paper"){
        result = "Player wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }

    else if(computerChoice=="Rock" && playerChoice== "Scissors"){
        result = "Computer wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }

    else if(computerChoice=="Paper" && playerChoice== "Scissors"){
        result = "Player wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }

    else if(computerChoice=="Paper" && playerChoice== "Rock"){
        result = "Computer wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }
    else if(computerChoice=="Scissors" && playerChoice== "Paper"){
        result = "Computer wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }

    else if(computerChoice=="Scissors" && playerChoice== "Rock"){
        result = "Player wins"
        console.log(result)
        output_field.textContent = result;
        return result
    }
}
//Funktion die Spiel startet. es wird so oft mittels playRound() gespielt, bis entweder Computer oder Spieler 5 Punkte und somit gewonnen hat
function game(){
    var playerScore = 0
    var computerScore = 0
    while(playerScore < 5 && computerScore <5){
        var result = playRound(computerPlay(), playerInput())
        if(result == "Player wins"){
            playerScore++
            console.log("P: " + playerScore + " - " + "C: " + computerScore)
        }
        else if(result == "Computer wins"){
            computerScore++
            console.log("P: " + playerScore + " - " + "C: " + computerScore)
        }
        else{
            console.log(result + ", P: " + playerScore + " - " + "C: " + computerScore)
        }
    }
    if(playerScore==5){
        console.log("Player won the match")
        console.log("P: " + playerScore + " - " + "C: " + computerScore)
    }
    if(computerScore==5){
        console.log("Computer won the match")
        console.log("P: " + playerScore + " - " + "C: " + computerScore)
    }

}