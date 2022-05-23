function movieRatings(input) {
  let movieCount = Number(input.shift());
  let maxRating = 0;
  let minRating = Number.MAX_SAFE_INTEGER;
  let printHighestRating = '';
  let printLowestRating = '';
  let ratingSum = 0;

  for (let i = 1; i <= movieCount; i++) {
    let movieName = input.shift();
    let movieRating = Number(input.shift());
    if (movieRating > maxRating) {
      maxRating = movieRating;
      printHighestRating = movieName;
    }
    if (movieRating <= minRating) {
      minRating = movieRating;
      printLowestRating = movieName;
    }
    ratingSum += movieRating;
  }
  let average = ratingSum / movieCount;
  console.log(
    `${printHighestRating} is with highest rating: ${maxRating.toFixed(1)}`
  );
  console.log(
    `${printLowestRating} is with lowest rating: ${minRating.toFixed(1)}`
  );
  console.log(`Average rating: ${average.toFixed(1)}`);
}
movieRatings([
  '5',
  'A Star is Born',
  '7.8',
  'Creed 2',
  '7.3',
  'Mary Poppins',
  '7.2',
  'Vice',
  '7.2',
  'Captain Marvel',
  '7.1',
]);
