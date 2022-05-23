function storeProvision(stockArr, orderArr) {
    const localStore = {};

    for (let i = 0; i < stockArr.length; i += 2) {
        const currentProduct = stockArr[i];
        localStore[currentProduct] = Number(stockArr[i + 1]);
    }

    for (let i = 0; i < orderArr.length; i += 2) {
        const deliveredItem = orderArr[i];

        if (!localStore.hasOwnProperty(deliveredItem)) {
            localStore[deliveredItem] = Number(orderArr[i + 1]);
        } else if (localStore.hasOwnProperty(deliveredItem)) {
            localStore[deliveredItem] += Number(orderArr[i + 1]);
        }
    }

    for (const key in localStore) {
        console.log(`${key} -> ${localStore[key]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30',
    ]
);
