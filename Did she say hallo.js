/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

function validateHello(greetings) {
  res =  //regex here/.test(greetings)
  return res
}
*/

function validateHello(greetings) {
    const regex = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i;
    const result = regex.test(greetings);
    return result;
}

console.log(validateHello('hello'))
//--------BEST PRACTIES------------------
//1
const validateHello1 = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
console.log(validateHello1('ciao'))

//2
const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
}

const validateHello2 = greetings => {
    for (key in hellos) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}

console.log(validateHello2('salut'))