module.exports = {
  setCookie,
  mapCategories,
  mapSingleCategory,
};

function setCookie(response, token) {
  response.cookie('token', token, { httpOnly: true });
}

const categories = [
  { value: 'estate', label: 'Real Estate', selected: false },
  { value: 'vehicles', label: 'Vehicles', selected: false },
  { value: 'furniture', label: 'Furniture', selected: false },
  { value: 'electronics', label: 'Electronics', selected: false },
  { value: 'other', label: 'Other', selected: false },
];

function mapCategories(currentCategory) {
  return categories.map(selectCategory);
  function selectCategory(option) {
    if (option.value == currentCategory) {
      option.selected = true;
    }
    return option;
  }
}

function mapSingleCategory(category) {
  return categories.find(catg => catg.value == category).label;
}
