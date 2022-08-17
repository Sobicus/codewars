//#10.js
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str) {
  let newArray = str.split("");
  newArray.shift();
  newArray.pop();
  return newArray.join("");
}

//Solution
function removeChar(str) {
    return str.slice(1, -1);
}