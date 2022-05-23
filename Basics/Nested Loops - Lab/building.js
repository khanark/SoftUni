function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let print = '';

    for (var i = floors; i >= 1; i--) {
        for (var j = 0; j <= rooms - 1; j++) {
            if (i % 2 === 1) {
                if (i === floors) {
                    print += `L${i}${j} `;
                } else {
                    print += `A${i}${j} `;
                }
            } else if (i % 2 === 0) {
                if (i === floors) {
                    print += `L${i}${j} `;
                } else {
                    print += `O${i}${j} `;
                }
            }
        }
        console.log(print);
        print = '';
    }
}
building(['9', '5']);
