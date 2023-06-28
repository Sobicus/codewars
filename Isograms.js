/*
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

function isIsogram(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {

            if(str[i]==str[j])return false
        }
    }
    return true
}

console.log(isIsogram('qwerty'))
console.log(isIsogram('qwertq'))

/*------------------The Best practices--------------------*/
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}
/*How it`s work*/
/*
Это решение использует конструкцию new Set(),
    которая создает коллекцию уникальных элементов из строки str.
    При этом все буквы приводятся к верхнему регистру с помощью метода toUpperCase(),
    чтобы не учитывать разницу между большими и маленькими буквами.
    Затем сравнивается размер коллекции (size) с длиной исходной строки (length).
    Если они равны, значит в строке нет повторяющихся букв, и функция возвращает true.
    Если они не равны, значит в строке есть повторяющиеся буквы, и функция возвращает false.

 */