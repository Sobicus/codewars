function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)return []
    let counter = 0
    let sum = 0
    input.forEach(el=>{
        if(el<0) sum+=el
        if (el>0) counter++
    });
    return [counter, sum]
}
