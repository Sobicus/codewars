//#8
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
  let newStr = "";
  for (let i = str.length; i > 0; i--) {
    newStr += str[i - 1];
  }
  return newStr;
}

// Solutions
//1.
function solution(str) {
  return str.split("").reverse().join("");
}
