function createCard(face, suit) {
    // store valid faces
    const validFaces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ];

    // store valid suits
    const validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    // handle different errors
    if (!validFaces.includes(face)) {
        throw new Error();
    }
    if (!validSuits.hasOwnProperty(suit)) {
        throw new Error();
    }
    return {
        face,
        suit,
        toString: () => `${face}${validSuits[suit]}`,
    };
}
const card = createCard('J', 'H');
console.log(card.toString());
