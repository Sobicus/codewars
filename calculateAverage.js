/*
Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
* */

function findAverage(array) {
    const arrLength = array.length
    let acc = 0
    let step = 0
    if(array.length===0){
        return 0
    }
    for (let i = 0; i < arrLength; i++) {
        acc += array[i]
        step = i+1
    }
    return acc/step;
}

findAverage([1,2,3])

/*----------BEST PRACTICE-----------*/
//№1
const find_average = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
//№2
function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i=0; i<array.length; i++) {
        result +=array[i];
    }
    return result/array.length;
}