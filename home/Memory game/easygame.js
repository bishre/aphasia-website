var numberChoosenCards=0;
var one;
var two;
var count=0;
var back= 'supereffort.png';
var cards=[];

cards[0]='apple.jpg';
cards[1]='kiwi.jpg';
cards[2]='cherries.jpg';
cards[3]='apple.jpg';
cards[4]='kiwi.jpg';
cards[5]='cherries.jpg';



function init(){
  shuffle();
  for(let i=0; i<cards.length;i++){
    document.images[i].src =cards[i];

  }
}

 function shuffle(){

  for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * cards.length);
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
  }
  return cards;
}

function startTimer(){
  s=setInterval(control,50);
}

function stopTimer(){
  clearInterval(s);
}

function choose(index){
  if (numberChoosenCards==0){
    one=index;
    // the pic we choose will be one of pic in array
    document.images[index].src=cards[index];
    numberChoosenCards=1;

  }else{
    numberChoosenCards=2
    two=index;
    document.images[index].src=cards[index];
    startTimer();

  }

}

function control(){
  stopTimer();

  if (cards[one]== cards[two])
  {
    count++;

    document.images[one].src= back;
    document.images[two].src=back;
    document.images[one].onclick="";
    document.images[two].onclick="";
    document.getElementById('win').innerHTML= "Well-done. You got matched cards"
    numberChoosenCards=0;

      }


  else if (cards[one] !== cards[two])
   {
    document.getElementById('win').innerHTML="Opps. It is unmatched. Try again";
    numberChoosenCards=0;

   }
   if (count==3)
   {
  document.getElementById('win').innerHTML="Well-done. Do you want to you play again or move to the next level?";
   }
}
