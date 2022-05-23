function oldBooks(input) {
  let favouriteBook = input[0];
  let index = 1;
  let books = input[index];
  let checkedBooks = 0;
  let isValid = true;

  while (books !== favouriteBook) {
    index++;
    books = input[index];
    checkedBooks++;
    if (books === "No More Books") {
      isValid = false;
      break;
    }
    continue;
  }
  if (!isValid) {
    console.log(
      `The book you search is not here!\nYou cheked ${checkedBooks} books.`
    );
  } else {
    console.log(`You checked ${checkedBooks} books and found it.`);
  }
}
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
