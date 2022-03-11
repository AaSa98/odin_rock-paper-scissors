
const output_field = document.getElementById("output_text");
const playercount = document.getElementById("playercount");
const comcount = document.getElementById("comcount");
var playerScore = 0
var computerScore = 0
playercount.textContent = "Player-Count: " + playerScore;
comcount.textContent = "COM-Count: " + computerScore;
const img_player = document.getElementById("img_player");
const img_com = document.getElementById("img_com");

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
    
    //Bildwechsel der Anzeige falls Unentschieden ist
    if(computerNumber == 0){
        computerChoice = "Rock";
    }
    else if (computerNumber == 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    return computerChoice

}

//Funktion, die eine Runde SSP spielt, indem computerPlay() und playerInput() aufgerufen wird und je nach return-Wert beider Funktionen der Gewinner festgesstellt wird
function playRound(computerChoice, playerChoice){
    var result
    while(playerScore < 5 && computerScore <5){
   
        if(computerChoice == playerChoice){
            result = "Draft!"
            console.log(result)
            output_field.textContent = result;
            if(playerChoice == "Rock"){
                img_com.src="./pictures/rock.png";
                img_player.src="./pictures/rock.png";
            }
            else if(playerChoice == "Paper"){
                img_com.src="./pictures/paper.png";
                img_player.src="./pictures/paper.png";
            }
            else{
                img_com.src="./pictures/scissors.png";
                img_player.src="./pictures/scissors.png";
            }
            gameWon(playerChoice)
            return result;
        }

        else if(computerChoice=="Rock" && playerChoice== "Paper"){
            result = "Player wins"
            console.log(result)
            output_field.textContent = result;
            playerScore++;
            playercount.textContent = "Player-Count: " + playerScore;
            img_com.src="./pictures/rock.png";
            img_player.src="./pictures/paper.png";
            gameWon()
            return result;
        }

        else if(computerChoice=="Rock" && playerChoice== "Scissors"){
            result = "Computer wins"
            console.log(result)
            output_field.textContent = result;
            computerScore++;
            comcount.textContent = "COM-Count: " + computerScore;
            img_com.src="./pictures/rock.png";
            img_player.src="./pictures/scissors.png";
            gameWon()
            return result;
        }

        else if(computerChoice=="Paper" && playerChoice== "Scissors"){
            result = "Player wins"
            console.log(result)
            output_field.textContent = result;
            playerScore++;
            playercount.textContent = "Player-Count: " + playerScore;
            img_com.src="./pictures/paper.png";
            img_player.src="./pictures/scissors.png";
            gameWon()
            return result;
        }

        else if(computerChoice=="Paper" && playerChoice== "Rock"){
            result = "Computer wins"
            console.log(result)
            output_field.textContent = result;
            computerScore++;
            comcount.textContent = "COM-Count: " + computerScore;
            img_com.src="./pictures/paper.png";
            img_player.src="./pictures/rock.png";
            gameWon()
            return result;
        }
        else if(computerChoice=="Scissors" && playerChoice== "Paper"){
            result = "Computer wins"
            console.log(result)
            output_field.textContent = result;
            computerScore++;
            comcount.textContent = "COM-Count: " + computerScore;
            img_com.src="./pictures/scissors.png";
            img_player.src="./pictures/paper.png";
            gameWon()
            return result;
        }

        else if(computerChoice=="Scissors" && playerChoice== "Rock"){
            result = "Player wins"
            console.log(result)
            output_field.textContent = result;
            playerScore++;
            playercount.textContent = "Player-Count: " + playerScore;
            img_com.src="./pictures/scissors.png";
            img_player.src="./pictures/rock.png";
            gameWon()
            return result;
        }
    }  
      
}

function gameWon(){
    if(playerScore==5){
        output_field.textContent="Player won the match"
        output_field.style.color='green';
        // if(alert('Player won the match. Play again')){}
        // else    window.location.reload(); 
    }
    if(computerScore==5){
        output_field.textContent="Computer won the match"
        output_field.style.color='red';
        // if(alert('You lost. Computer won the match. Play again')){}
        // else    window.location.reload(); 
    }
}