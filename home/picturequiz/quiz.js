var questions=[
  {
    question:"Which is a dolphin?",
    alternatives:["dolphin.jpeg","lion.jpeg", "bear.jpeg"],
    correct:0
},
  {
    question:"Which is a cat?",
    alternatives:["dog.jpg","walrus.jpg","cat.jpeg"],
    correct:2
  },
  {
    question:"Which is a lion?",
    alternatives:["bear.jpeg", "lion.jpeg", "dog.jpg"],
    correct:1
  },
  {
    question:"Which is a reindeer?",
    alternatives:["reindeer.jpg", "candle.jpg", "tuoli.jpg"],
    correct:0
  },
  {
    question:"Which is a car?",
    alternatives:["joulupukki.jpg", "car.jpg", "vapp.jpg"],
    correct:1
  },
  {
    question:"Which is a cow?",
    alternatives:["airplane.jpg", "cow.jpg", "ananas.jpg"],
    correct:1
  },
  {
    question:"Which is straberries?",
    alternatives:["dog.jpg", "mansikka.jpg", "donuts.jpg"],
    correct:1
  },
  {
    question:"Which is a house?",
    alternatives:["koti.jpg", "dolphin.jpeg", "door.jpg"],
    correct:0
  }

];
var correctAnswer=0;
var id=0;
var pick;
function start(){
    document.getElementById('status').innerHTML="";
  document.getElementById('question').innerHTML="<h1>"+questions[id].question+"</h1>";

  document.getElementById('1').src=questions[id].alternatives[0];
  document.getElementById('2').src=questions[id].alternatives[1];
  document.getElementById('3').src=questions[id].alternatives[2];
  document.getElementById('4').src=questions[id].alternatives[3];
  document.getElementById('5').src=questions[id].alternatives[4];
  document.getElementById('6').src=questions[id].alternatives[5];
}

function choose(index){
  pick= index;
  // this.src = questions[id].alternatives[index];
  // document.images[index].src=questions[id].alternatives[index];
  check();
}

function check(){
  if (pick===questions[id].correct){
    correctAnswer++;
    document.getElementById('status').innerHTML= "Correct";
    document.getElementById("status").style.color = "green";
     id++;
     setTimeout(start, 1000*2);
  }else{
    document.getElementById('status').innerHTML="Incorrect";
    document.getElementById("status").style.color = "red";
  }


}
/*var img= ["dolphin.jpeg","lion.jpeg", "bear.jpeg"];
var pick;
function start(){
  shuffle();
  for (let i = 0; i < img.length; i++) {
    document.images[i].src=img[i];
  }
}

 function shuffle(){
   for (var i = img.length-1; i >0 ; i--) {
    var j = Math.floor(Math.random()*img.length);
    var temp = img[i];
    img[i]=img[j];
    img[j]=temp;
   }
   return img;
}

function choose(index){
  pick=index;
  document.images[index].src=img[index];
  check();
}

function check(){
  if (img[pick]=="dolphin.jpeg"){
    document.getElementById('status').innerHTML="Correct";
  }else{
    document.getElementById('status').innerHTML="Incorrect";
  }

}*/
