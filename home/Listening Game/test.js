var wordList = ['dog', 'cat', 'cow', 'tiger', 'elephant'];
var newList = [];
for (let i=0; i<3; i++){
  var word = wordList[Math.floor(Math.random()*3)];
  newList.push(word);
  wordList.splice(wordList.indexOf(word),1);
}
console.log(newList);
