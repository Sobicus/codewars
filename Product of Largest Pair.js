/*
Product of Largest Pair
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
 */

function maxProduct(a) {
    let arrLength = a.length
    /*const sortFunc = (a, b) => {
        return a - b
    }
    let copArr = a.sort(sortFunc)*/
    let copArr = a.sort(function(a,b){
        return a-b
    })
    /*return copArr[arrLength - 1] * copArr[arrLength - 2]*/ /*<---------- Too slow! Speed must be lower than 600. Maybe try a different approach?: expected false to equal true*/
    return copArr.pop() * copArr.pop() /*<---------- Too slow! Speed must be lower than 600. Maybe try a different approach?: expected false to equal true*/


}

console.log(maxProduct([10, 2, 30, 4, 5]))