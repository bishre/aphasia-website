var count=0;
var back= 'Images/supereffort.png';
var cards=[];
var numberChoosenCards=0;
var one;
var two;

function init(){
  cards[0]='Images/apple.jpg';
  cards[1]='Images/kiwi.jpg';
  cards[2]='Images/cherries.jpg';
  cards[3]='Images/apple.jpg';
  cards[4]='Images/kiwi.jpg';
  cards[5]='Images/cherries.jpg';

  shuffle();
  for(let i=0; i<cards.length;i++){
    document.getElementsByClassName('1')[i].src =cards[i];
    document.getElementById('win').innerHTML="";
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


function choose(index){

  if (numberChoosenCards==0){

    one=index;

    // the pic we choose will be one of pic in array
    document.getElementsByClassName('1')[index].src=cards[index];
    numberChoosenCards=1;

  }else{
    numberChoosenCards=2
    two=index;
    document.getElementsByClassName('1')[index].src=cards[index];
    control();

  }

}

function control(){
//  stopTimer();

  if (cards[one]== cards[two])
  {
    count++;

    document.getElementsByClassName('1')[one].src= back;
    document.getElementsByClassName('1')[two].src=back;
    document.getElementsByClassName('1')[one].onclick="";
    document.getElementsByClassName('1')[two].onclick="";
    document.getElementById('win').innerHTML= "Hieno. Sinulla on samat kortit";
    numberChoosenCards=0;

      }


  else if (cards[one] !== cards[two])
   {
    document.getElementById('win').innerHTML="Väärä. Se ei ole sama korttia.Yritä uudellen";
    numberChoosenCards=0;

   }
   if (count==3)
   {
  document.getElementById('win').innerHTML="Haluatko pelaavan uudestaan vai siirtyäksesi seuraavalle tasolle?";
   }
}

function reload(){
  location.reload();
}
