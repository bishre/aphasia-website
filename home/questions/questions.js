var score = 0;

var myQuestions = [
  {
    question: "Is birch a tree?",
    answer: "Yes"
  },
  {
    question: "Is elephant bigger than mouse?",
    answer: "Yes"
  },
  {
    question: "Do you wash dishes in the shower?",
    answer: "No"
  }
];

function play() {
      document.getElementById("quiz").innerHTML = myQuestions[0].question;
}

function result() {
      if(document.getElementById("yes").innerHTML === myQuestions[0].answer){
        document.getElementById("answer").innerHTML = "You are correct!";
      } else if (document.getElementById("no").innerHTML === myQuestions[0].answer) {
        document.getElementById("answer").innerHTML = "Yes, birch is a tree.";
      }
}


/*yesButton.addEventListener("click", result);
noButton.addEventListener("click", result);*/


function next() {
  for (let i = 0; i < myQuestions.length; i++){
      document.getElementById("quiz").innerHTML = myQuestions[i].question;
  }
}
