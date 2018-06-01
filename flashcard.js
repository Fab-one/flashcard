var wordPairs = [["fiets","bike"],["auto","car"],["lift","elevator"],["deur","door"],["tafel","table"]
,["stoel","chair"],["beker","mug"],["muur","wall"],["zon","sun"],["regen","rain"]]


var randomDutch = wordPairs[Math.floor(Math.random() * wordPairs.length)];
document.write(randomDutch[0]);

function answerEnglish(){
  document.getElementById("englishWord").innerHTML = randomDutch[1];

var userInput = document.getElementById("userAnswer").value;

if (userInput === randomDutch[1]) {
  document.getElementById("englishWord").innerHTML = ("CORRECT!")
} else {
  document.getElementById("englishWord").innerHTML = ("Sorry, that answer is not right! The right answer is " + randomDutch[1])}
}
