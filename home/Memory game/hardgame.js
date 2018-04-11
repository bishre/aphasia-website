var count=0;
var one;
var two;
var numberChoosenCards=0;
var back='openme.jpg';

var cards=[];
cards[0]='toothbrush.jpg';
cards[1]='toothbrush.jpg';
cards[2]='toothpaste.jpg';
cards[3]='toothpaste.jpg';
cards[4]='mug.jpeg';
cards[5]='mug.jpeg';
cards[6]='alarm.jpg';
cards[7]='alarm.jpg';
cards[8]='soap.jpg';
cards[9]='soap.jpg';
cards[10]='towel.jpg';
cards[11]='towel.jpg';

function init(){
  shuffle();

}

function shuffle(){
  for (var i=cards.length-1; i>0; i--){
    var j= Math.floor(Math.random()*cards.length);
    var temp= cards[i];
    cards[i]=cards[j];
    cards[j]= temp;
  }
  return cards;
}



function startTimer(){
  // 1000= 1second waiting time before it flips back to 'openme' picture
  s= setInterval(control,1000);
}

function stopTimer(){
  clearInterval(s);
}

function choose(index){
  if (numberChoosenCards==0){
    one=index;
    document.images[index].src=cards[index];
    numberChoosenCards=1;

  }else{

    two=index;
    document.images[index].src=cards[index];
    numberChoosenCards=2;
    startTimer();
  }
}

function control(){
stopTimer();

if(cards[one]==cards[two]){
    count++;
    document.getElementById("win").innerHTML="Congratulation! U got matched cards"
    document.images[one].onclick="";
    document.images[two].onclick="";
    numberChoosenCards=0;

  }else if (cards[one]!== cards[two]){
   document.getElementById('win').innerHTML="Opps. It is unmatched. Try again";
   document.images[one].src=back;
   document.images[two].src=back;
   numberChoosenCards=0;

  }if (count===6){
     document.getElementById('win').innerHTML="Well-done. Do you want to you play again?";
  }

}

function restart(){
  document.location.href="";
}
