
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
return `Score:${score.win} tie:${score.tie} Lsot:${score.lost}`}
finalOutput();
};



function computerChoiceGenreter(){
    let randomNumber=Math.random()*3;
    if (randomNumber>0 && randomNumber<=1){
        return 'STONE'
    }else if (randomNumber>1 && randomNumber<=2){
        return 'PAPER'
    }else{
        return 'SICSSOR'
    }
}
function getResult(UserMove,computerMove){
    if (UserMove==='STONE'){
        if (computerMove==='STONE'){
            score.tie++
            return `it's A tie Guys`
        }else if (computerMove==='PAPER'){
            score.lost++
            return 'computer WIN'
        }else{
            score.win++;
            return 'You win'
        }
    }else if (UserMove==='PAPER'){
        if (computerMove==='PAPER'){
            score.tie++
            return `it's A tie Guys`
        }else if (computerMove==='SICSSOR'){
            score.lost++
            return 'computer WIN'
        }else{
            score.win++;
            return 'You win'
        }

    }else{
        if (computerMove==='SICSSOR'){
            score.tie++
            return `it's A tie Guys`
        }else if (computerMove==='STONE'){
            score.lost++
            return 'computer WIN'
        }else{
            score.win++;
            return 'You win'
        }

    }
}
function finalOutput(UserMove,computerMove,resultMsg){
    localStorage.setItem('Score',JSON.stringify(score))
    document.querySelector('.user-move').innerText=
    UserMove ? `User: ${UserMove}`: 'User:-----';
    document.querySelector('.computer-move').innerText=
    computerMove ?`computer: ${computerMove}`:'computer:-----';
    document.querySelector('.result').innerText=
    resultMsg ?resultMsg:'result :-----' ;
    document.querySelector('.score').innerText=score.displayScore() ;


}

