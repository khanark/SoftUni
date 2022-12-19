const fs = require('fs/promises');

const getProducts = async () => {
    const data = JSON.parse(
        (await fs.readFile('./data/products.json')).toString()
    );
    return Object.entries(data).map(([_id, item]) =>
        Object.assign({}, item, { _id })
    );
};

module.exports = {
    getProducts,
};
