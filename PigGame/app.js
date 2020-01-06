/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScore,activePlaye,gamePlaying,twoSixInARow;


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    twoSixInARow = 0;
    gamePlaying = true;
    document.getElementById('dice1').style.display='none';
    document.getElementById('dice2').style.display ="none";

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('acitve');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
var x = document.getElementById('deneme').value;
}

init();

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.getElementById('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;




document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor((Math.random() * 6 )+ 1);
        var dice2 = Math.floor((Math.random() * 6 )+ 1);
        /*
        if(dice == 6){
            twoSixInARow++;
            if(twoSixInARow ===2){
                scores[activePlayer] = 0;
                alert('Two 6 in a row');
                nextPlayer();
            }
        }else{
            twoSixInARow = 0;
        }
        */
        document.getElementById('dice1').style.display='block';
        document.getElementById('dice2').style.display ="block";
        document.getElementById('dice1').src='dice-' + dice + '.png';
        document.getElementById('dice2').src='dice-' + dice2 + '.png';
        
        if(dice !== 1){
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }
    

    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying){
            scores[activePlayer] += roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            var input = document.querySelector('#deneme').value;
            var winningScore;
            if(input){
                winningScore = input;
            }else{
                winningScore = 100;
            }
            if(scores[activePlayer] >= winningScore){
                document.querySelector('#name-' + activePlayer).textContent = "Winner";
                document.getElementById('dice1').style.display='none';
                document.getElementById('dice2').style.display ="none";
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying=false;
            }else{
                nextPlayer();
            }
        }


});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    //document.querySelector(".player-0-panel").classList.remove("active");
    //document.querySelector('.player-1-panel').classList.add('active'); 

    document.getElementById('dice1').style.display='none';
    document.getElementById('dice2').style.display ="none";
}


document.querySelector('.btn-new').addEventListener('click',init);


