const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const readFile = async () => {
    const data = (await fs.readFile('./data/products.json')).toString();
    return JSON.parse(data);
};

const getProducts = async () => {
    const data = await readFile();
    return Object.entries(data).map(([_id, item]) =>
        Object.assign({}, item, { _id })
    );
};

const addProduct = async (name, price) => {
    const data = await readFile();
    data[uuidv4()] = { name, price };
    await fs.writeFile('./data/products.json', JSON.stringify(data, null, 2));
};

const getSingleProduct = async id => {
    const data = await readFile();
    return data[id];
};

const editProduct = async (id, product) => {
    const data = await readFile();
    data[id] = product;
    await fs.writeFile('./data/products.json', JSON.stringify(data, null, 2));
};

module.exports = {
    getProducts,
    addProduct,
    getSingleProduct,
    editProduct,
};
