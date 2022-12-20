const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const getProducts = async () => {
    const data = JSON.parse(
        (await fs.readFile('./data/products.json')).toString()
    );
    return Object.entries(data).map(([_id, item]) =>
        Object.assign({}, item, { _id })
    );
};

const addProduct = async (name, price) => {
    const data = JSON.parse(
        (await fs.readFile('./data/products.json')).toString()
    );
    data[uuidv4()] = { name, price };
    await fs.writeFile('./data/products.json', JSON.stringify(data, null, 2));
};

module.exports = {
    getProducts,
    addProduct,
};
