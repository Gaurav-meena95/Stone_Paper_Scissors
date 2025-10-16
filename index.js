
let scoreStr=localStorage.getItem('Score');
let score;
resetSCore(scoreStr);
function resetSCore(){
    score=scoreStr ? JSON.parse(scoreStr):{
        win:0,
        tie:0,
        lost:0,
    }

score.displayScore=function(){
return `Score:${score.win} Tie:${score.tie} Lost:${score.lost}`}
finalOutput(); 
};



function computerChoiceGenreter(){
    let randomNumber=Math.random()*3;
    if (randomNumber>0 && randomNumber<=1){
        return 'STONE'
    }else if (randomNumber>1 && randomNumber<=2){
        return 'PAPER'
    }else{
        return 'SCISSOR'
    }
}
function getResult(UserMove,computerMove){
    if (UserMove==='STONE'){
        if (computerMove==='STONE'){
            score.tie++
            return `It's a Tie!`
        }else if (computerMove==='PAPER'){
            score.lost++
            return 'Computer Wins!'
        }else{
            score.win++;
            return 'You Win!'
        }
    }else if (UserMove==='PAPER'){
        if (computerMove==='PAPER'){
            score.tie++
            return `It's a Tie!`
        }else if (computerMove==='SCISSOR'){
            score.lost++
            return 'Computer Wins!'
        }else{
            score.win++;
            return 'You Win!'
        }

    }else{
        if (computerMove==='SCISSOR'){
            score.tie++
            return `It's a Tie!`
        }else if (computerMove==='STONE'){
            score.lost++
            return 'Computer Wins!'
        }else{
            score.win++;
            return 'You Win!'
        }

    }
}
function finalOutput(UserMove,computerMove,resultMsg){
    localStorage.setItem('Score',JSON.stringify(score))
    document.querySelector('.user-move').innerText=
    UserMove ? `User: ${UserMove}`: 'User:-----';
    document.querySelector('.computer-move').innerText=
    computerMove ?`Computer: ${computerMove}`:'Computer:-----';
    document.querySelector('.result').innerText=
    resultMsg ?resultMsg:'Result :-----' ;
    document.querySelector('.score').innerText=score.displayScore() ;


}

