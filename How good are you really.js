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
        console.log(runs=runs + 1)
        acc+=el
    })
    return acc/runs<yourPoints
}
console.log(betterThanAverage([1,2,3,4,5], 2))

