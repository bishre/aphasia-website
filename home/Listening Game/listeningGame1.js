let x = 1;
var wordList = ['dog', 'cat', 'cow', 'tiger', 'elephant', 'horse', 'frog', 'monkey', 'bird', 'goat'];
var newList = [];
var soundFile = "";
var correctAnswer = "";
function createNew(){
  var wordList = ['dog', 'cat', 'cow', 'tiger', 'elephant', 'horse', 'frog', 'monkey', 'bird', 'goat'];
  newList = [];
  soundFile = "";
  correctAnswer = "";
  for (let i=0; i<3; i++){
    var word = wordList[Math.floor(Math.random()*wordList.length)];
    newList.push(word);
    wordList.splice(wordList.indexOf(word),1);
  }
  correctAnswer = newList[Math.floor(Math.random()*newList.length)];
  soundFile=  "sounds/"+correctAnswer+".mp3";
  return newList, correctAnswer, soundFile;
}

// var questionList = questionArray[Math.floor(Math.random()*5)];


function playAudio(){
  document.getElementById('audio').src = soundFile;
}

// var startGame = function(){
//   startQuiz();
// }

var startQuiz = function(){
  createNew();
  // playAudio();
  // var questionList = questionArray[Math.floor(Math.random()*5)];
  // var correctAnswer = questionList[Math.floor(Math.random()*3)];
  // var soundFile=  "audio/"+correctAnswer+".mp3";
  // var soundFile="audio/"+wordList[Math.floor(Math.random()*3)]+".mp3";
  // document.getElementById('audio').src = soundFile;
  document.getElementById('audio').src = soundFile;
  for (let i=0; i<3; i++){
    btn = document.getElementsByClassName('results');
    // btn.setAttribute("id", "word"+x);
    btn[i].innerHTML=newList[i];
    btn[i].onclick = pickWord;
    // document.getElementById('options').appendChild(btn[i]);
    x++;
  }
}
function nextQ(){
  createNew();
  // questionList = questionArray[Math.floor(Math.random()*5)];
  // correctAnswer = newList[Math.floor(Math.random()*3)];
  // soundFile=  "sounds/"+correctAnswer+".mp3";
  // document.getElementById('audio').src = soundFile;
    document.getElementById('audio').src = soundFile;
    document.getElementById('result').innerHTML = "";
    for (let i=0; i<3;i++){
      btn[i].innerHTML = newList[i];
      btn.onclick = pickWord;
      x++;
    }
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
