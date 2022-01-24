//#13
/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(string) {
  let lastCharIndex = string.length - 1;
  while (lastCharIndex > 0) {
    if (string[lastCharIndex] === "!") {
      lastCharIndex--;
    } else {
      break;
    }
  }
  return string.substring(0, lastCharIndex + 1);
}

//Solutions
function remove(s) {
  return s.replace(/!+$/, "");
}

