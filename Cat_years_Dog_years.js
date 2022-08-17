var humanYearsCatYearsDogYears = function (humanYears) {
    let human = humanYears
    let cat = (humanYears) => {
        if (humanYears === 1) {
            return 15
        } else if (humanYears === 2) {
            return 24
        } else {
            return 24 + ((humanYears - 2) * 4)
        }
    }
    let dog = (humanYears) => {
        if (humanYears === 1) {
            return 15
        } else if (humanYears === 2) {
            return 24
        } else {
            return 24 + ((humanYears - 2) * 5)
        }
    }
    return [human, cat(humanYears), dog(humanYears)];
}