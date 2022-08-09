function printDeckOfCards(cards) {
    // create function to create cards
    function createCard() {
        // store the valid faces
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

        // store the valid suits
        const validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        // return cards as array if valid // else throw an error
        return cards
            .map(card => {
                const cardLength = card.length - 1;
                const checkIfIs10 = () =>
                    card.includes('10') ? '10' : card[0];
                if (
                    !validFaces.includes(checkIfIs10()) ||
                    !validSuits[card[cardLength]]
                ) {
                    throw new Error(`Invalid card: ${card}`);
                } else {
                    return `${checkIfIs10()}${validSuits[card[cardLength]]}`;
                }
            })
            .join(' ');
    }

    // try if an error is thrown and if so catch and output the error message
    try {
        console.log(createCard());
    } catch (err) {
        console.log(err.message.toString());
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
