// var wordList = ['dog', 'cat', 'cow', 'tiger', 'elephant'];
var questionArray = [['dog', 'cat', 'cow'], ['cat', 'cow', 'tiger'], ['cow', 'tiger', 'elephant'], ['tiger', 'elephant', 'dog'], ['elephant', 'cat', 'dog']];
let x = 1;
let questionN = 1;
var questionList = [];
for (let i=0; i<3; i++){
  let question = questionArray[Math.floor(Math.random()*questionArray.length)];
  questionList.push(question);

}
var questionList = questionArray[Math.floor(Math.random()*5)];
var correctAnswer = questionList[Math.floor(Math.random()*3)];
var soundFile=  "sounds/"+correctAnswer+".mp3";

function playAudio(){
  document.getElementById('audio').src = soundFile;
}

var startGame = function(){
  startQuiz();
}

var startQuiz = function(){
  playAudio();
  // var questionList = questionArray[Math.floor(Math.random()*5)];
  // var correctAnswer = questionList[Math.floor(Math.random()*3)];
  // var soundFile=  "audio/"+correctAnswer+".mp3";
  // var soundFile="audio/"+wordList[Math.floor(Math.random()*3)]+".mp3";
  // document.getElementById('audio').src = soundFile;
  for (let i=0; i<3; i++){
    btn = document.getElementsByClassName('results');
    // btn.setAttribute("id", "word"+x);
    btn[i].innerHTML=questionList[i];
    btn[i].onclick = pickWord;
    // document.getElementById('options').appendChild(btn[i]);
    x++;
  }
}
var nextQ = function(){
  document.getElementById('result').innerHTML = '';
  questionList = questionArray[Math.floor(Math.random()*5)];
  correctAnswer = questionList[Math.floor(Math.random()*3)];
  soundFile=  "sounds/"+correctAnswer+".mp3";
  document.getElementById('audio').src = soundFile;
    // document.getElementById('audio').src = soundFile;
    for (let i=0; i<3;i++){
      // btn = document.createElement('BUTTON');
      // btn.setAttribute("id", "word"+x);
      btn[i].innerHTML = questionList[i];
      btn.onclick = pickWord;
      console.log(btn.innerHTML);
      x++;

    }
    // for (let y=1;y<4;y++){
    //   console.log(document.getElementById("word"+y).innerHTML);
    // }


    // for (let y=1;y<4;y++){
    //   document.getElementById('word'+y).innerHTML = btn[y-1];
    // }
}

function skipThis(){
  nextQ();
}


function pickWord(){
  if (("sounds/"+this.innerHTML+".mp3")===soundFile){
    document.getElementById('result').innerHTML = 'Correct!'
    document.getElementById('result').style.color = 'green';
    setTimeout(nextQ, 1000);
  } else {
    document.getElementById('result').innerHTML = 'Wrong!'
    document.getElementById('result').style.color = 'red';
  }
}
