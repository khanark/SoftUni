module.exports = {
  setCookie,
  mapCategories,
};

function setCookie(response, token) {
  response.cookie('token', token, { httpOnly: true });
}

const categoriesToken = [
  { value: 'estate', label: 'Real Estate', selected: false },
  { value: 'vehicles', label: 'Vehicles', selected: false },
  { value: 'furniture', label: 'Furniture', selected: false },
  { value: 'electronics', label: 'Electronics', selected: false },
  { value: 'other', label: 'Other', selected: false },
];

function mapCategories(auction) {
  const categories = categoriesToken.map(selectCategory);
  const singleCategory = categoriesToken.find(
    catg => catg.value == auction.category
  ).label;
  return {
    categories,
    singleCategory,
  };
  function selectCategory(option) {
    if (option.value == auction.category) {
      option.selected = true;
    }
    return option;
  }
}
