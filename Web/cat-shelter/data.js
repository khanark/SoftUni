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
    async allCats(query) {
      const data = await readFile();
      const catsArr = Object.entries(data.cats).map(([id, val]) =>
        Object.assign({}, { id }, val)
      );

      if (query.search) {
        return catsArr.filter(c =>
          c.breed.toLocaleLowerCase().includes(query.search.toLocaleLowerCase())
        );
      }
      return catsArr;
    },

    async singleCat(id) {
      const data = await readFile();
      return data.cats[id];
    },

    async updateCat(id, cat) {
      const data = await readFile();
      data.cats[id] = cat;
      await writeFile(data);
    },

    async deleteCat(id) {
      const data = await readFile();
      delete data.cats[id];
      await writeFile(data);
    },

    async createCat(cat) {
      const data = await readFile();
      data.cats[uuidv4()] = cat;
      await writeFile(data);
    },

    async addBreed(breedName) {
      const data = await readFile();
      data.breeds.push(breedName);
      await writeFile(data);
    },

    async getBreeds() {
      const data = await readFile();
      return data.breeds;
    },
  };
  next();
};
