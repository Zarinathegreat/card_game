
var roundScore, activePlayer, scores, gamePlaying;

init();

// START THE GAME
document.querySelector('.btn-roll').addEventListener('click', function() {
if(gamePlaying) {

//1. Generate random number
    var dice = Math.floor((Math.random() * 6) + 1);

 // 2. Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-' + dice + '.png';

// 3. Update the score if the number is NOT 1
    if(dice !== 1) {
    //Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    } else {
        nextPlayer();
            }
        }
});

// 1. Add the scores to the total scores
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add current score to global score
        scores[activePlayer] += roundScore;

// 2. Update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

 // 3. Check if a player won the game
if(scores[activePlayer] >= 30) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    gamePlaying = false;

} else {
    nextPlayer();
}
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

function init() {
    roundScore = 0;
    activePlayer = 0;
    scores = [0,0];
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    // document.querySelector('.player-0-panel').classList.remove('winner');
    // document.querySelector('.player-1-panel').classList.remove('winner');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.remove('active');
    // document.querySelector('.player-0-panel').classList.add('active');
}