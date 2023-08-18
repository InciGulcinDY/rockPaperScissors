//Variables and DOM structures:
let computerChoice = document.querySelector('#computerChoice');
let gamerChoice = document.querySelector('#gamerChoice');
let vsCard = document.querySelector('#vsCard');
let gamerScore = 0;
let computerScore = 0;
//GAME STARTS!
function rockPaperScissor(){
    //Step-1: Gamer makes a choice
    //Step-2: Computer plays(Random Choice)
    computerPlays();
    //Step-3: Game
    if(gamerScore != 5 && computerScore != 5){
        game(); //Game Rules
    }
    //Step-4: GAME OVER
    if(gamerScore === 5 || computerScore === 5){
        showGameOver(); //Showing game result!
        endingGame();   //Ending the game!
    }
}
function computerPlays(){
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    if(random === 1){
        computerChoice.setAttribute('src' , 'images/paper-hand.jpg');
    }else if(random === 2){
        computerChoice.setAttribute('src' , 'images/rock-hand.jpg');     
    }else if(random === 3){
        computerChoice.setAttribute('src' , 'images/scissor-hand.jpg');
    }
}
function game(){
    let paper = "images/paper-hand.jpg";
    let rock = "images/rock-hand.jpg";
    let scissor = "images/scissor-hand.jpg";
    let gamer = gamerChoice.src.slice(gamerChoice.src.search("images"));
    let computer = computerChoice.src.slice(computerChoice.src.search("images"));
    let computerScoreDOM = document.querySelector('#computerScore');
    let gamerScoreDOM = document.querySelector('#gamerScore');
    if(gamer === paper){
        switch(computer){
            case paper :
                break;
            case rock :
                gamerScore += 1;
                break;
            case scissor :
                computerScore += 1;
                break;
        }
    }else if(gamer === rock){
        switch(computer){
            case paper :
                computerScore += 1;
                break;
            case rock :
                break;
            case scissor :
                gamerScore += 1;
                break;
        }
    }else if(gamer === scissor){
        switch(computer){
            case paper :
                gamerScore += 1;
                break;
            case rock :
                computerScore += 1;
                break;
            case scissor :
                break;
        }
    }
    computerScoreDOM.innerHTML = computerScore;
    gamerScoreDOM.innerHTML = gamerScore;
}
function showGameOver(){
    gameOver = document.createElement('div');
    if(gamerScore === 5){
        gameOver.innerHTML=`
        <h3 class="text-success">GAME OVER! You Won!</h3>
        `
    }else if(computerScore === 5){
        gameOver.innerHTML=`
        <h3 class="text-danger">GAME OVER! Unfortunately, You lost!!</h3>
        `
    }
    vsCard.append(gameOver);
}
function endingGame(){
    let paper = document.querySelector('#paperHand');
    let rock = document.querySelector('#rockHand');
    let scissor = document.querySelector('#scissorHand');
    gamerButtonsDOM = document.querySelector('#gamerButtons');
    gamerButtonsDOM.innerHTML = `
    <h4 class = "text-light">End of The Game!</h4>
    <p class = "text-light">Please refresh the page to replay the game.</p>
    `   
}
