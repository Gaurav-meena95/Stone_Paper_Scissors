let score = {
    won: 0,
    lost: 0,
    tie: 0,
};

resetScore();

function resetScore() {
    score = {
        won : 0,
        lost : 0,
        tie : 0,
    }
    finalOutput();
};

function computerChoiceGenerator() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'STONE'
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'PAPER'
    }
    else {
        return 'SCISSOR'
    }
}

function getResult(userMove, computerMove) {
    if(userMove === computerMove) {
        score.tie++;
        return `It's a Tie!`
    }
    if (userMove === 'STONE') {
        if (computerMove === 'PAPER') {
            score.lost++
            return 'Computer Wins!'
        }
        else {
            score.won++;
            return 'You Win!'
        }
    }
    else if(userMove === 'PAPER') {
        if(computerMove === 'SCISSOR') {
            score.lost++
            return 'Computer Wins!'
        }
        else {
            score.won++;
            return 'You Win!'
        }
    }
    else {
        if(computerMove === 'STONE') {
            score.lost++
            return 'Computer Wins!'
        }
        else {
            score.won++;
            return 'You Win!'
        }
    }
}

function finalOutput(userMove, computerMove, resultMsg) {
    document.querySelector('.user-move').innerHTML = userMove ? `<p style="padding:10px; border: 1px solid #e1e1e1; border-radius:10px;">User</p> ${userMove}`: '<p style="padding:10px; border: 1px solid #e1e1e1; border-radius:10px;">User</p>';
    document.querySelector('.computer-move').innerHTML= computerMove ?`${computerMove} <p style="padding:10px; border: 1px solid #e1e1e1; border-radius:10px;">Computer</p>`:' <p style="padding:10px; border: 1px solid #e1e1e1; border-radius:10px;">Computer</p>';

    document.querySelector('.result').innerHTML = resultMsg ? resultMsg : "";

    document.querySelector('#won').innerText = score.won;
    document.querySelector('#lost').innerText = score.lost;
    document.querySelector('#tie').innerText = score.tie;
}

