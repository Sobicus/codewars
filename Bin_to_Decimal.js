//my decision
function binToDec(bin) {
    let accum = 0;
    let newArray = bin.split('').reverse();
    for (let i = 0; i < newArray.length; i++) {
        accum += newArray[i] * Math.pow(2, i);
    }
    return accum;
}

//top decision
function binToDec(bin){
    return parseInt(bin,2);
}