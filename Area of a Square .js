function squareArea(A) {
    let circumference = A * 4;
    let radius = circumference / (Math.PI * 2);
    return Math.round((radius * radius) * 100) / 100;
}

console.log(squareArea(2)); //1.62
console.log(squareArea(0)); //0
console.log(squareArea(14.05)); //80