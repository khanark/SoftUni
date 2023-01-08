// create difficulty matcher
const difficulties = [
  'Very easy',
  'Easy',
  'Medium (Standard 3x3)',
  'Intermediate',
  'Expert',
  'Hardcore',
];
const matchDiff = value => difficulties[value - 1];

const matchSelected = value => {
  const options = [];
  for (let i = 0; i < difficulties.length; i++) {
    options.push({
      id: i + 1,
      content: `${i + 1} - ${difficulties[i]}`,
      selected: i + 1 == value ? true : false,
    });
  }
  return options;
};

const verifyData = (data) => {
  return {
    name: data.name,
    description: data.description,
    imageUrl: data.imageUrl,
    difficulty: Number(data.difficulty)
  }
}

module.exports = {
  matchDiff,
  matchSelected,
  verifyData
};
