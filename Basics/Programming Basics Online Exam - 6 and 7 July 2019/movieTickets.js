function calcTickets(input) {
  let index = 0;
  let movieName = input[index];
  index++;
  let freeSpaces = Number(input[index]);
  index++;
  let standardCount = 0;
  let studentCount = 0;
  let kidCount = 0;
  let movieTickes = 0;
  let totalTickets = 0;

  while (movieName !== 'Finish') {
    let ticketType = input[index];
    while (ticketType !== 'End') {
      switch (ticketType) {
        case 'student':
          studentCount++;
          break;
        case 'standard':
          standardCount++;
          break;
        case 'kid':
          kidCount++;
          break;
      }
      movieTickes++;
      totalTickets++;
      if (movieTickes >= freeSpaces) break;
      index++;
      ticketType = input[index];
    }
    console.log(
      `${movieName} - ${((movieTickes / freeSpaces) * 100).toFixed(2)}% full.`
    );
    movieTickes = 0;
    index++;
    movieName = input[index];
    index++;
    freeSpaces = Number(input[index]);
    index++;
  }
  const calcPerc = number => ((number / totalTickets) * 100).toFixed(2);
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${calcPerc(studentCount)}% student tickets.`);
  console.log(`${calcPerc(standardCount)}% standard tickets.`);
  console.log(`${calcPerc(kidCount)}% kids tickets.`);
}
calcTickets([
  'Taxi',
  '10',
  'standard',
  'kid',
  'student',
  'student',
  'standard',
  'standard',
  'End',
  'Scary Movie',
  '6',
  'student',
  'student',
  'student',
  'student',
  'student',
  'student',
  'Finish',
]);
