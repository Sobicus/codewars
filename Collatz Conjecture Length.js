function collatz(n) {
    let acc = 1
    while (n > 1) {
        acc++
        n = n % 2 === 0 ? n / 2 : n * 3 + 1
    }
    return acc
}

collatz(20)
