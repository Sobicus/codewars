/*
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).
 String will never be empty and you do not need to account for different data types.*/

function findShort(s){
    function compare(a, b) {
        if (a > b) return 1; // если первое значение больше второго
        if (a == b) return 0; // если равны
        if (a < b) return -1; // если первое значение меньше второго
    }
    const arr = s.split(" ")
    const numArr=arr.map(el=>el.length)
    console.log(numArr)
    const numb = (numArr.sort(compare))
    console.log(numb)
    return numb[0]
}
findShort(`Let's travel abroad shall we`)

//--------Best practice
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest.length;
}