var myQuestions = [
  {
    question: "Onko koivu puu?",
    answer: "Yes",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, koivu on puu."
  },
  {
    question: "Onko elefantti suurempi kuin hiiri?",
    answer: "Yes",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, elefantti on suurempi kuin hiiri."
  },
  {
    question: "Pestäänkö tiskit suihkussa?",
    answer: "No",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, tiskit pestään tiskialtaassa."
  },
  {
    question: "Kävelevätkö siat kahdella sorkalla?",
    answer: "No",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, siat kävelevät neljällä sorkalla."
  },
  {
    question: "Voiko kengällä harjata hampaat?",
    answer: "No",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, hampaat harjataan hammasharjalla."
  },
  {
    question: "Ovatko hedelmät ja kasvikset terveellisiä?",
    answer: "Yes",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, hedelmät ja kasvikset ovat terveellisiä."
  },
  {
    question: "Ovatko espanja ja saksa kaksi eri kieltä?",
    answer: "Yes",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, espanja ja saksa ovat eri kieliä."
  },
  {
    question: "Onko ympyrässä kulmia?",
    answer: "No",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, ympyrässä ei ole yhtään kulmaa."
  },
  {
    question: "Käytetäänkö uunia ruuan pakastamiseen?",
    answer: "No",
    correctComment: "Olet oikeassa!",
    comment: "Väärin, uunia käytetään ruuan lämmittämiseen."
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
        document.getElementById("noButton").disabled = true;
        document.getElementById("yesButton").disabled = true;
      } else {
        document.getElementById("answer").innerHTML = myQuestions[counter].comment;
        document.getElementById("answer").style.color = "red";
        document.getElementById("noButton").disabled = true;
        document.getElementById("yesButton").disabled = true;
      }

      setTimeout(toTheNext, 3000);
      counter++;
}


function toTheNext(){
  document.getElementById("noButton").disabled = false;
  document.getElementById("yesButton").disabled = false;
  document.getElementById("answer").innerHTML = "";

  if(counter < myQuestions.length){
    document.getElementById("quiz").innerHTML = myQuestions[counter].question;
  } else {
    document.getElementById("answer").innerHTML = "Pääsit kysymysten loppuun. Mennään tekemään lisää muita harjoituksia!";
    document.getElementById("answer").style.color = "#6c6ea0";
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("goToGames").style.visibility = "visible";
  }
}
