var count=0;
var one;
var two;
var numberChoosenCards=0;
var back='Images/openme.jpg';

var cards=[];

function init(){
  cards[0]='Images/toothbrush.jpg';
  cards[1]='Images/toothbrush.jpg';
  cards[2]='Images/toothpaste.jpg';
  cards[3]='Images/toothpaste.jpg';
  cards[4]='Images/mug.jpeg';
  cards[5]='Images/mug.jpeg';
  cards[6]='Images/alarm.jpg';
  cards[7]='Images/alarm.jpg';
  cards[8]='Images/soap.jpg';
  cards[9]='Images/soap.jpg';
  cards[10]='Images/towel.jpg';
  cards[11]='Images/towel.jpg';
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
  s= setInterval(control,200);
}

function stopTimer(){
  clearInterval(s);
}

function choose(index){
  if (numberChoosenCards==0){
    one=index;
    document.getElementsByClassName('a')[index].src=cards[index];
    numberChoosenCards=1;
    clear();

  }else{

    two=index;
    document.getElementsByClassName('a')[index].src=cards[index];
    numberChoosenCards=2;
    startTimer();
  }
}

function control(){
stopTimer();

if(cards[one]==cards[two]){
    count++;
    document.getElementById("win").innerHTML="Hienoa! Sinulla on samat kortit";
    document.getElementsByClassName('a')[one].onclick="";
    document.getElementsByClassName('a')[two].onclick="";
    numberChoosenCards=0;

  }else if (cards[one]!== cards[two]){
   document.getElementById('lose').innerHTML="Väärin! Se ei ole sama kortti .Yritä uudellen.";
   document.getElementsByClassName('a')[one].src=back;
   document.getElementsByClassName('a')[two].src=back;
   numberChoosenCards=0;

  }if (count===6){
     document.getElementById('win').innerHTML="Haluatko pelata uudestaan?";
      }
}

function clear(){
  document.getElementById("win").innerHTML="";
  document.getElementById('lose').innerHTML="";
}

function restart(){
  document.location.href="";
}
