// create difficilty macher
const difficulties = [
  'Very easy',
  'Easy',
  'Medium (Standart 3x3)',
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

module.exports = {
  matchDiff,
  matchSelected,
};
