function pipeFix(numbers){
    let a = numbers[0]
    let b = numbers[numbers.length - 1];
    let c = [];
    for(let i = a; i <= b; i++){
        c.push(i)
    }
    console.log(c);
    return c;
}



pipeFix([1,2,3,5,6,8,9]) //[1,2,3,4,5,6,7,8,9]

pipeFix([1,2,3,12]) //[1,2,3,4,5,6,7,8,9,10,11,12]

pipeFix([6,9]) //[6,7,8,9]

pipeFix([-1,4]) //[-1,0,1,2,3,4]

pipeFix([-1,4]) [1,2,3]




