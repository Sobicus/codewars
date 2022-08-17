//#16
/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/
const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;

//Solutions
//1
function amIWilson(p) {
  function fact(x) {
    return x <= 1 ? 1 : x * fact(x - 1);
  }

  return ((fact(p - 1) + 1) / (p * p)) % 1 === 0;
}

//2
const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;
