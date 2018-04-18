var myQuestions = [
  {
    question: "Is birch a tree?",
    answer: "Yes",
    correctComment: "You are correct!",
    comment: "Incorrect, birch is a tree."
  },
  {
    question: "Is elephant bigger than mouse?",
    answer: "Yes",
    correctComment: "You are correct!",
    comment: "Incorrect, elephant is bigger than mouse."
  },
  {
    question: "Do you wash dishes in the shower?",
    answer: "No",
    correctComment: "You are correct!",
    comment: "Incorrect, you wash dishes in the sink."
  },
  {
    question: "Can pigs walk on two feet?",
    answer: "No",
    correctComment: "You are correct!",
    comment: "Incorrect, pigs walk on four feet."
  },
  {
    question: "Can you brush your teeth with a shoe?",
    answer: "No",
    correctComment: "You are correct!",
    comment: "Incorrect, you wash your teeth with toothbrush."
  },
  {
    question: "Are fruits and vegetables healthy to eat?",
    answer: "Yes",
    correctComment: "You are correct!",
    comment: "Incorrect, fruits are healthy."
  },
  {
    question: "Are Spanish and German different languages?",
    answer: "Yes",
    correctComment: "You are correct!",
    comment: "Incorrect, they are two different languages."
  },
  {
    question: "Is there corners in circle?",
    answer: "No",
    correctComment: "You are correct!",
    comment: "Incorrect, there are no corners in circle."
  },
  {
    question: "Are ovens used to freeze things?",
    answer: "No",
    correctComment: "You are correct!",
    comment: "Incorrect, ovens are used to heat things."
  }
];

var counter = 0;

function play() {
      document.getElementById("quiz").innerHTML = myQuestions[counter].question;
      document.getElementById("goToGames").style.visibility = "hidden";
}


function result(yesorno) {
      if(yesorno === myQuestions[counter].answer){
        document.getElementById("answer").innerHTML = myQuestions[counter].correctComment;
        document.getElementById("answer").style.color = "green";
      } else {
        document.getElementById("answer").innerHTML = myQuestions[counter].comment;
        document.getElementById("answer").style.color = "red";
      }

      setTimeout(toTheNext, 3000);
      counter++;
}


function toTheNext(){
  document.getElementById("answer").innerHTML = "";

  if(counter < myQuestions.length){
    document.getElementById("quiz").innerHTML = myQuestions[counter].question;
  } else {
    document.getElementById("answer").innerHTML = "You made it to the end. Let's go practise some more stuff!";
    document.getElementById("answer").style.color = "#6c6ea0";
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("goToGames").style.visibility = "visible";
  }
}
