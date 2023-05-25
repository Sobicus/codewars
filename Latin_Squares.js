/*
Latin Squares

A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

Here are examples of latin squares of size 4 and 7:

[[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5],
 [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3],
 [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2],
 [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7],
                     [5, 6, 4, 3, 7, 2, 1],
                     [1, 2, 7, 6, 3, 5, 4],
                     [3, 4, 2, 1, 5, 7, 6]]
Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.

Write a function that returns a latin square for any positive integer n.

If you are interested in verifying that any array is a latin square, see Latin Square Validator.
* */

function makeLatinSquare(n) {
    const array=[]
    for (let i = 1; n>=i; i++ ){
        array.push(i)
    }
    const latianSquare = array.map((el, id, arr)=>{
        return [...arr.slice(id+1), ...arr.slice(0,id+1)]
    })
    return latianSquare;
}

console.log(makeLatinSquare(5))

/*----------BEST PRACTICE-----------*/
const makeLatinSquare1 = (n) => {
    let square = new Array(n).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square[i][j] = ((i + j) % n) + 1
        }
    }
    return square
}

function makeLatinSquare2(n) {
    const range = [...Array(n).keys()].map(x=> x + 1);
    return range.map(y=> range.map(x=> (y + x) % n + 1));
}

console.log(makeLatinSquare1(5))
console.log(makeLatinSquare2(5))
