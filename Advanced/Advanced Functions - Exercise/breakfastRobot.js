function solution() {
    // create the ingredients collection
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    // create the recipes collection
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    // create function that creates functionality
    function createMeal(string) {
        // parse the input
        const [command, x, i] = string.split(' ');

        // create function list
        const robot = {
            restock: (microelement, quantity) => {
                ingredients[microelement] += Number(quantity);
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                const neededIngredients = Object.keys(recipes[recipe]);
                const missedIngredients = neededIngredients.filter(
                    key => ingredients[key] < recipes[recipe][key] * quantity
                );
                if (missedIngredients.length > 0) {
                    return `Error: not enough ${missedIngredients[0]} in stock`;
                } else {
                    neededIngredients.forEach(
                        key =>
                            (ingredients[key] -=
                                quantity * recipes[recipe][key])
                    );
                    return 'Success';
                }
            },
            report: () =>
                Object.keys(ingredients)
                    .map(key => `${key}=${ingredients[key]}`)
                    .join(' '),
        };
        return robot[command](x, i);
    }

    // return the function
    return createMeal;
}

// input
let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Error: not enough carbohydrate in stock
console.log(manager('restock flavour 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare apple 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock fat 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare burger 1')); // Error: not enough carbohydrate in stock
console.log(manager('report')); // Error: not enough carbohydrate in stock
