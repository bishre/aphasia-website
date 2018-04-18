var questions=[
  {
    question:"Which is dolphin?",
    alternatives:["dolphin.jpeg","lion.jpeg", "bear.jpeg"],
    correct:0
},
  {
    question:"Which is cat?",
    alternatives:["dog.jpg","walrus.jpg","cat.jpeg"],
    correct:2
  },
  {
    question:"Which is lion",
    alternatives:["bear.jpeg", "lion.jpeg", "dog.jpg"],
    correct:1
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
     id++;
     setTimeout(start, 1000);
  }else{
    document.getElementById('status').innerHTML="Incorrect";
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
