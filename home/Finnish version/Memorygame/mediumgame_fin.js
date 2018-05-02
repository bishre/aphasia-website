var cards=[];
var count=0;
var first;
var second;
var numberChoosenCards=0;
var back='Images/great.png'


function init(){
  cards[0]='Images/tram.jpg';
  cards[1]='Images/tram.jpg';
  cards[2]='Images/car.jpg';
  cards[3]='Images/car.jpg';
  cards[4]='Images/bus.jpg';
  cards[5]='Images/bus.jpg';
  cards[6]='Images/bicycle.jpg';
  cards[7]='Images/bicycle.jpg';
  cards[8]='Images/train.jpg';
  cards[9]='Images/train.jpg';
  cards[10]='Images/airplane.jpg';
  cards[11]='Images/airplane.jpg';

  shuffle();
  for (let i=0; i< cards.length; i++){
    document.getElementsByClassName('a')[i].src=cards[i];
    document.getElementById('win').innerHTML="";
  }
}

function shuffle(){
  for(let i= cards.length-1; i>0; i--){
    var j= Math.floor(Math.random()*cards.length);
    var temp= cards[i];
    cards[i]= cards[j];
    cards[j]= temp;

  }
  return cards;
}


function choose(index){
  if (numberChoosenCards==0){
    one=index;
    document.getElementsByClassName('a')[index].src= cards[index];
    numberChoosenCards=1;
    clear();
  }else{
    numberChoosenCards=2
    two=index;
    document.getElementsByClassName('a')[index].src= cards[index];
    control();

  }
}

function control(){

  if (cards[one]==cards[two]){
  count++;
  document.getElementsByClassName('a')[one].src=back;
  document.getElementsByClassName('a')[two].src=back;
  document.getElementsByClassName('a')[one].onclick="";
  document.getElementsByClassName('a')[two].onclick="";
  document.getElementById('win').innerHTML= "Hienoa! Sinulla on samat kortit.";
  numberChoosenCards=0;
  }
  else if (cards[one]!== cards[two]){
  document.getElementById('lose').innerHTML="Väärin! Se ei ole sama kortti. Yritä uudelleen.";
  numberChoosenCards=0;
  }
if (count==6){
 document.getElementById('win').innerHTML="Haluatko pelata uudestaan vai siirtyä seuraavalle tasolle?";
  }
}

function clear(){
  document.getElementById("win").innerHTML="";
  document.getElementById('lose').innerHTML="";
}

function reload(){
  location.reload();
}
