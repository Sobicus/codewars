/*
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/


function doubleChar(str) {
    let arr = str.split('')
    let test = []
    for(let i=0; arr.length>i;i++){
        test.push(arr[i])
        test.push(arr[i])
    }
    return test.join('')
}

console.log(doubleChar('qwe'))

//------best prctice
function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
        word = word + str[i] + str[i];
    };
    return word;
};

function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
    return str.split("").map(function (c) {
        return c + c;
    }).join("");
}