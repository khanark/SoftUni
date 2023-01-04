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
    getCubes: async () => {
      const cubes = await getData();
      return Object.entries(cubes).map(([id, val]) =>
        Object.assign({}, { id }, val)
      );
    },
    postCube: async data => {
      const cubes = await getData();
      const level = {
        1: 'Very Easy',
        2: 'Easy',
        3: 'Medium',
        4: 'Intermediate',
        5: 'Expert',
        6: 'Hardcore',
      };
      const { difficulty } = data;
      data.difficultyLevel = level[difficulty];
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
