/*
Be Concise IV - Index of an element in an array
Task
Provided is a function Kata which accepts two parameters in the following order:
 array, element and returns the index of the element if found and "Not found" otherwise.
 Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata.
 (no more than 161) You may assume that all array elements are unique.
 function findTemplate(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}
 */

const find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

console.log(find([1,2,3,4,5,6,7,8,9,10,11], 6))
function findTheBest(array, element) {
    return array.includes(element)?array.indexOf(element):'Not found'
}

console.log(findTheBest([1,2,3,4,5,6,7,8,9,10,11], 6))