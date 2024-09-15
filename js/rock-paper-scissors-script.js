   

    

    let score = JSON.parse(localStorage.getItem(('score'))) || {wins:0,losses:0,ties:0};

    updateScore();
    console.log(score)



function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

}

function playGame (userMove){
    let result = '';
    console.log('Your Move:',userMove)

    const machineMove = pickComputerMove();
    
    if (userMove==='rock')
    {
        if(machineMove === 'rock'){
            result='Tie';
        }
        else if(machineMove === 'paper'){
            result='You lose...';
        }
        else if(machineMove === 'scissors'){
            result='You Win!';
        }
    }

    else if (userMove==='paper')
    {
        if(machineMove === 'paper'){
            result='Tie';
        }
        else if(machineMove === 'scissors'){
            result='You lose...';
        }
        else if(machineMove === 'rock'){
            result='You Win!';
        }
    }

    else if (userMove==='scissors')
    {
        if(machineMove === 'scissors'){
            result='Tie';
        }
        else if(machineMove === 'rock'){
            result='You lose...';
        }
        else if(machineMove === 'paper'){
            result='You Win!';
        }
    }

    if (result === 'You Win!'){
        score.wins+=1
    }
    else if (result === 'You lose...'){
        score.losses+=1
    } 
    else if (result === 'Tie'){
        score.ties+=1
    } 
    console.log('Result:', result)

    document.querySelector('.js-moves').innerHTML = `Your move: <img class="move-icon" src="/assets/images/${userMove}-emoji.png">. Computer\'s move: <img class="move-icon" src="/assets/images/${machineMove}-emoji.png">`;
    document.querySelector('.js-result').innerHTML = result;
    updateScore();

    localStorage.setItem('score', JSON.stringify(score))

    }



function pickComputerMove (){
    const randomNumber = Math.random();
    let machineMove = '';
    if(randomNumber >= 0 && randomNumber<=1/3){
        machineMove='rock';
    }
    else if (randomNumber >= 1/3 && randomNumber<=2/3){
        machineMove='paper';
    }
    else if (randomNumber >= 2/3 && randomNumber<=3/3){
        machineMove='scissors';
    }

    
    console.log('Computer\'s Move:',machineMove)
    return machineMove;
    }

    

    let isAutoplaying=false;
    let intervalId;

    function autoplay(){
        if(!isAutoplaying){
            intervalId = setInterval(function(){
                const userMove = pickComputerMove();
                playGame(userMove)
                isAutoplaying=true
            },  1000)

        }
        else{
            clearInterval(intervalId)
            isAutoplaying=false
        }
        
    }

