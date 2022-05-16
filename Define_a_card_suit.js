function defineSuit(card) {
    let testArray = card.split('')
    switch (testArray[testArray.length - 1]) {
        case '♣':
            return 'clubs'
            break;
        case '♦':
            return 'diamonds'
            break;
        case '♥':
            return 'hearts'
            break;
        case '♠':
            return 'spades'
            break;
    }
}

//--------------------------------------------------------
//The best practices  codeWars

function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}