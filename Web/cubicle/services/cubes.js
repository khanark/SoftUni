const fs = require('fs/promises');
const uniqid = require('uniqid');

const getData = async () => {
  return JSON.parse(await fs.readFile('./data/cubes.json'));
};

const saveData = async data => {
  await fs.writeFile('./data/cubes.json', JSON.stringify(data, null, 2));
};

module.exports = (req, res, next) => {
  req.storage = {
    getCubes: async query => {
      let cubes = Object.entries(await getData()).map(([id, val]) =>
        Object.assign({}, { id }, val)
      );

      if (query.search) {
        cubes = cubes.filter(c => c.name == query.search);
      }

      if (query.from) {
        cubes = cubes.filter(c => c.difficulty >= Number(query.from));
      }

      if (query.to) {
        cubes = cubes.filter(c => c.difficulty <= Number(query.to));
      }

      return cubes;
    },
    postCube: async data => {
      const cubes = await getData();
      cubes[uniqid()] = data;
      await saveData(cubes);
    },
    getSingleCube: async id => {
      const cubes = await getData();
      const singleCube = cubes.find(c => c.id == id);
      return singleCube;
    },
  };
  next();
};
