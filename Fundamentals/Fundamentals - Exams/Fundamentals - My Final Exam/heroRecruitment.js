function solve(arr) {
    // create collection
    const heroes = {};

    // forEach line console.log the storeHeroes()
    arr.forEach(line => {
        const [command, x, i] = line.split(' ');
        if (storeHeroes()[command](x, i) !== undefined) {
            console.log(storeHeroes()[command](x, i));
        }
    });

    // create function to edit heroes collection
    function storeHeroes() {
        return {
            Enroll: heroName => {
                if (!heroes[heroName]) {
                    heroes[heroName] = { spellBook: [] };
                } else {
                    return `${heroName} is already enrolled.`;
                }
            },
            Learn: (heroName, spellName) => {
                if (!heroes[heroName]) {
                    return `${heroName} doesn't exist.`;
                }
                if (!heroes[heroName].spellBook.includes(spellName)) {
                    heroes[heroName].spellBook.push(spellName);
                } else {
                    return `${heroName} has already learnt ${spellName}.`;
                }
            },
            Unlearn: (heroName, spellName) => {
                if (!heroes[heroName]) {
                    return `${heroName} doesn't exist.`;
                }
                if (!heroes[heroName].spellBook.includes(spellName)) {
                    return `${heroName} doesn't know ${spellName}.`;
                } else {
                    heroes[heroName].spellBook.splice(
                        heroes[heroName].spellBook.indexOf(spellName),
                        1
                    );
                }
            },
            End: () => {
                return `Heroes:\n${Object.entries(heroes)
                    .map(entry => {
                        return `== ${entry[0]}: ${entry[1].spellBook.join(
                            ', '
                        )}`;
                    })
                    .join('\n')}`;
            },
        };
    }
}
solve([
    'Enroll Stefan',
    'Enroll Peter',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn John ItShouldNotWork',
    'Unlearn George Dispel',
    'Unlearn Stefan ItShouldWork',
    'End',
]);
