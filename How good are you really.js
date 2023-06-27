/*
How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


*/

function betterThanAverage(classPoints, yourPoints) {
    let acc = 0
    let runs = 0
    let sumArr = classPoints.map(el=>{
        runs = runs+1
        acc+=el
    })
    return acc/runs<yourPoints
}
console.log(betterThanAverage([1,2,3,4,5], 2))
console.log(betterThanAverage([1,2,3,4,5], 4))

/*little refactor myu code*/
function betterThanAverageRef(classPoints, yourPoints) {
    let acc = 0
    let sumArr = classPoints.map(el=>{
        acc+=el
    })
    return acc/classPoints.length<yourPoints
}
console.log(betterThanAverageRef([1,2,3,4,5], 2))
console.log(betterThanAverageRef([1,2,3,4,5], 4))
/*
The best practices
 */

function betterThanAverage1(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

console.log(betterThanAverage1([1,2,3,4,5,6], 2))
console.log(betterThanAverage1([1,2,3,4,5,6], 4))