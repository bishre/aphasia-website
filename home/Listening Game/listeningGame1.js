let x = 1;
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

function playAudio(){
  document.getElementById('audio').src = soundFile;
}

var startQuiz = function(){
  createNew();
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
    setTimeout(document.getElementById('result').style.color = 'green', 100);
    document.getElementById('success').src = "sounds/success.mp3";
    // document.getElementsByClassName('results').style.background = 'green';
    setTimeout(nextQ, 1000);
  } else {
    document.getElementById('result').innerHTML = 'Wrong!'
    document.getElementById('result').style.color = 'red';
    document.getElementById('success').src = "sounds/failure.mp3";
    // document.getElementsByClassName('results').style.background = 'green';
  }
}
