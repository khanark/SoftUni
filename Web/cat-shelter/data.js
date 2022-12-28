const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const readFile = async () => {
  return JSON.parse(await fs.readFile('./src/data/cats.json'));
};

const writeFile = async data => {
  await fs.writeFile('./src/data/cats.json', JSON.stringify(data, null, 2));
};

module.exports = (req, res, next) => {
  req.storage = {
    async allCats() {
      const cats = await readFile();
      return Object.entries(cats).map(([key, val]) =>
        Object.assign({}, val, (val._id = key))
      );
    },
    async singleCat(id) {
      const cats = await readFile();
      return cats[id];
    },
    async updateCat(id, data) {
      const cats = await readFile();
      cats[id] = data;
      await writeFile(cats);
    },
    async deleteCat(id) {
      const cats = await readFile();
      delete cats[id];
      await writeFile(cats);
    },
    async createCat(data) {
      const cats = await readFile();
      cats[uuidv4()] = data;
      await writeFile(cats);
    },
  };
  next();
};
