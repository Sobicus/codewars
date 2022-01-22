//#9
/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  let acc = "";
  for (let i = 0; i < n; i++) {
    acc += s;
  }
  return acc;
}

//Solution

function repeatStr(n, s) {
  return s.repeat(n);
}
