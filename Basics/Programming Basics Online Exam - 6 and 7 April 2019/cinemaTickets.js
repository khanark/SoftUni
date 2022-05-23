function cinemaTickets(input) {
  let movieName = input.shift(),studentTickets = 0,standardTickets = 0,kidTickets = 0,totalTickets = 0,movieTickets = 0;
  while (movieName !== 'Finish') {
    let freeSpaces = Number(input.shift());
    let ticketType = input.shift();
    while (ticketType !== 'End') {
      switch (ticketType) {
        case 'student':studentTickets++;break;
        case 'standard':standardTickets++;break;
        case 'kid':kidTickets++;break
      }
      movieTickets++;
      totalTickets++;
      if (movieTickets >= freeSpaces) break;
      ticketType = input.shift();
    }
    let percentageFull = (movieTickets / freeSpaces) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    movieTickets = 0;
    movieName = input.shift();
  }
  const calcPercentage = (ticketsType) => (ticketsType / totalTickets) * 100;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${calcPercentage(studentTickets).toFixed(2)}% student tickets.`);
  console.log(`${calcPercentage(standardTickets).toFixed(2)}% standard tickets.`);
  console.log(`${calcPercentage(kidTickets).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
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
