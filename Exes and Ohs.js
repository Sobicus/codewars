/*
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let arr = str.toLowerCase().split('')
    let caunterX = 0
    let caunterO = 0
    arr.map(el => {
        if (el == 'x') {
            caunterX = caunterX + 1
        }
        if (el == 'o') {
            caunterO=caunterO + 1
        }
    })
    return caunterO == caunterX
}


console.log(XO('xoooooo'))
console.log(XO('xo'))


/*--------------------BEST practies-----------------------------------*/
function XO1(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO1('x11111o'))
console.log(XO1('x11111o'))
console.log(XO1('x11111o'))

const XO2 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO2('x11111o'))
console.log(XO2('xxoxoo'))
console.log(XO2('xxxxx'))