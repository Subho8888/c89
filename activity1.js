var score=0;






function updatescore(){
score=score+1;
document.getElementById("score").innerHTML="SCORE:"+score;
}

function savescore(){
    localStorage.setItem("Score",score);
}

function nextpage(){
  window.location="https://www.youtube.com/"
}