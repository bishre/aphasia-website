let x = 1;
function createNew(){
  var wordList = ['koira', 'kissa', 'lehmä', 'tiikeri', 'norsu', 'hevonen', 'sammakko', 'apina', 'lintu', 'vuohi'];
  newList = [];
  soundFile = "";
  correctAnswer = "";
  for (let i=0; i<3; i++){
    var word = wordList[Math.floor(Math.random()*wordList.length)];
    newList.push(word);
    wordList.splice(wordList.indexOf(word),1);
  }
  correctAnswer = newList[Math.floor(Math.random()*newList.length)];
  soundFile=  "./sounds/"+correctAnswer+".mp3";
  return newList, correctAnswer, soundFile;
}

function playAudio(){
  document.getElementById('audio').src = soundFile;
}

var startQuiz = function(){
  createNew();
  document.getElementById('audio').src = soundFile;
  for (let i=0; i<3; i++){
    image = document.getElementsByClassName('results');
    // btn.setAttribute("id", "word"+x);
    image[i].src = "./images/" + newList[i] + ".jpg";
    image[i].onclick = pickWord;
    // document.getElementById('options').appendChild(btn[i]);
    x++;
  }
}
function nextQ(){
  createNew();
    document.getElementById('audio').src = soundFile;
    document.getElementById('result').innerHTML = "";
    for (let i=0; i<3;i++){
      image[i].src = "./images/" + newList[i] + ".jpg";
      image.onclick = pickWord;
      x++;
    }
}

function pickWord(){
  // document.getElementsByClassName('results').style.opacity = '0.5';
  if (this.src===("file:///C:/Users/s1800094/Documents/aphasia-website/home/Listening%20Game/Finnish%20Version/Picture%20Game/Animal%20Sound/images/" + correctAnswer + ".jpg")){
    document.getElementById('result').innerHTML = 'Correct!'
    setTimeout(document.getElementById('result').style.color = 'green', 100);
    document.getElementById('success').src = "./sounds/success.mp3";
    // this.style.border = 'green';
    setTimeout(nextQ, 1000);
  } else {
    document.getElementById('result').innerHTML = 'Wrong!'
    document.getElementById('result').style.color = 'red';
    document.getElementById('success').src = "./sounds/failure.mp3";
    // document.getElementsByClassName('results').style.background = 'green';
  }
}

// function pickWord(){
//   if (("sounds/"+this.innerHTML+".mp3")===soundFile){
//     document.getElementById('result').innerHTML = 'Correct!'
//     setTimeout(document.getElementById('result').style.color = 'green', 100);
//     document.getElementById('success').src = "sounds/success.mp3";
//     // document.getElementsByClassName('results').style.background = 'green';
//     setTimeout(nextQ, 1000);
//   } else {
//     document.getElementById('result').innerHTML = 'Wrong!'
//     document.getElementById('result').style.color = 'red';
//     document.getElementById('success').src = "sounds/failure.mp3";
//     // document.getElementsByClassName('results').style.background = 'green';
//   }
// }
