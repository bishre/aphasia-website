var questions=[
  {
    question:"Mikä on delfiini?",
    alternatives:["img/dolphin.jpeg","img/lion.jpeg", "img/bear.jpeg"],
    correct:0
  },
  {
    question:"Mikä on kissä?",
    alternatives:["img/dog.jpg","img/walrus.jpg","img/cat.jpeg"],
    correct:2
  },
  {
    question:"Mikä on leijona?",
    alternatives:["img/bear.jpeg", "img/lion.jpeg", "img/dog.jpg"],
    correct:1
  },
  {
    question:"Mikä on poro?",
    alternatives:["img/reindeer.jpg", "img/candle.jpg", "img/tuoli.jpg"],
    correct:0
  },
  {
    question:"Mikä on auto?",
    alternatives:["img/joulupukki.jpg", "img/car.jpg", "img/vapp.jpg"],
    correct:1
  },
  {
    question:"Mikä on lehmä?",
    alternatives:["img/airplane.jpg", "img/cow.jpg", "img/ananas.jpg"],
    correct:1
  },
  {
    question:"Mikä on mansikoita?",
    alternatives:["img/dog.jpg", "img/mansikka.jpg", "img/donuts.jpg"],
    correct:1
  },
  {
    question:"Mikä on talo?",
    alternatives:["img/koti.jpg", "img/dolphin.jpeg", "img/door.jpg"],
    correct:0
  },


];
var correctAnswer=0;
var id=0;
var pick;

function start(){
  document.getElementById('status').innerHTML="";
  document.getElementById('goToGames').style.visibility= "hidden";
  document.getElementById('question').innerHTML="<h1>"+questions[id].question+"</h1>";
  document.getElementById('1').src=questions[id].alternatives[0];
  document.getElementById('2').src=questions[id].alternatives[1];
  document.getElementById('3').src=questions[id].alternatives[2];

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
    document.getElementById('status').innerHTML= "Oikea!!";
    document.getElementById("status").style.color = "green";
    id++;
    setTimeout(start, 1000*1);


  }else{
    document.getElementById('status').innerHTML="Väärä.";
    document.getElementById("status").style.color = "red";
  }
}
