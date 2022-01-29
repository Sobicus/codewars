//#24
/*
Sentence Smash
Write a function that takes an array of words and smashes 
them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash(words) {
  let sentence = "";
  let finalSentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  let arrSentence = sentence.split("");
  for (let ii = 0; ii < arrSentence.length - 1; ii++) {
    finalSentence += arrSentence[ii];
  }
  return finalSentence;
}

//Solutions
//1
smash = function (words) {
  return words.join(" ");
};

//2
function smash(words) {
  "use strict";
  return words.join(" ");
}

//3
const smash = (words) => words.join(" ");
