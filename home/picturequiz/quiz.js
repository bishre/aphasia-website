var questions=[
  {
    question:"Which is a dolphin?",
    alternatives:["img/dolphin.jpeg","img/lion.jpeg", "img/bear.jpeg"],
    correct:0
  },
  {
    question:"Which is a cat?",
    alternatives:["img/dog.jpg","img/walrus.jpg","img/cat.jpeg"],
    correct:2
  },
  {
    question:"Which is a lion?",
    alternatives:["img/bear.jpeg", "img/lion.jpeg", "img/dog.jpg"],
    correct:1
  },
  {
    question:"Which is a reindeer?",
    alternatives:["img/reindeer.jpg", "img/candle.jpg", "img/tuoli.jpg"],
    correct:0
  },
  {
    question:"Which is a car?",
    alternatives:["img/joulupukki.jpg", "img/car.jpg", "img/vapp.jpg"],
    correct:1
  },
  {
    question:"Which is a cow?",
    alternatives:["img/airplane.jpg", "img/cow.jpg", "img/ananas.jpg"],
    correct:1
  },
  {
    question:"Which is straberries?",
    alternatives:["img/dog.jpg", "img/mansikka.jpg", "img/donuts.jpg"],
    correct:1
  },
  {
    question:"Which is a house?",
    alternatives:["img/koti.jpg", "img/dolphin.jpeg", "img/door.jpg"],
    correct:0
  },


];
var correctAnswer=0;
var counter=0;

function start(){
  document.getElementById('status').innerHTML="";
  document.getElementById('goToGames').style.visibility= "hidden";
  document.getElementById('question').innerHTML="<h1>"+questions[counter].question+"</h1>";
  document.getElementById('1').src=questions[counter].alternatives[0];
  document.getElementById('2').src=questions[counter].alternatives[1];
  document.getElementById('3').src=questions[counter].alternatives[2];

  }



function check(pick){
  if (pick===questions[counter].correct){
    document.getElementById('status').innerHTML= "Correct";
    document.getElementById("status").style.color = "green";
    setTimeout(nextQ, 1000);
    counter++;
  }else{
    document.getElementById('status').innerHTML="Incorrect";
    document.getElementById("status").style.color = "red";
  }
}

function nextQ(){

  if (counter<questions.length){
    document.getElementById('status').innerHTML="";
    document.getElementById('question').innerHTML = questions[counter].question;
    document.getElementById('1').src=questions[counter].alternatives[0];
    document.getElementById('2').src=questions[counter].alternatives[1];
    document.getElementById('3').src=questions[counter].alternatives[2];
  }else {
    document.getElementById('status').innerHTML="You've made it to the end!";
    document.getElementById('question').innerHTML = "";
    document.getElementById('1').style.display= "none";
    document.getElementById('2').style.display= "none";
    document.getElementById('3').style.display= "none";
    document.getElementById("goToGames").style.visibility = "visible";
  }
}
