var cards=[];
var count=0;
var first;
var second;
var numberChoosenCards=0;
var back='great.png'

cards[0]='tram.jpg';
cards[1]='tram.jpg';
cards[2]='car.jpg';
cards[3]='car.jpg';
cards[4]='bus.jpg';
cards[5]='bus.jpg';
cards[6]='bicycle.jpg';
cards[7]='bicycle.jpg';
cards[8]='train.jpg';
cards[9]='train.jpg';
cards[10]='airplane.jpg';
cards[11]='airplane.jpg';

function init(){
  shuffle();
  for (let i=0; i< cards.length; i++){
    document.images[i].src=cards[i];
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

function startTimer(){
  s= setInterval(control,50);
}

function stopTimer(){
  clearInterval(s);
}


function choose(index){
  if (numberChoosenCards==0){
    one=index;
    document.images[index].src= cards[index];
    numberChoosenCards=1;
  }else{
    numberChoosenCards=2
    two=index;
    document.images[index].src= cards[index];
    startTimer();

  }
}

function control(){
  stopTimer();
  if (cards[one]==cards[two]){
  count++;
  document.images[one].src=back;
  document.images[two].src=back;
  document.images[one].onclick="";
  document.images[two].onclick="";
  document.getElementById('win').innerHTML= "Well-done. You got matched cards."
  numberChoosenCards=0;
  }
  else if (cards[one]!== cards[two]){
  document.getElementById('win').innerHTML="Opps. It is unmatched. Try again";
  numberChoosenCards=0;
  }
if (count==6){
 document.getElementById('win').innerHTML="Well-done. Do you want to you play again or move to the next level?";
  }
}
