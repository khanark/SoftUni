function oscarsWeekInCinema(input) {
  let movieName = input[0];
  let roomType = input[1];
  let tickets = Number(input[2]);
  let ticketPrice = 0;

  switch (movieName) {
    case 'A Star Is Born':
      if (roomType === 'normal') {
        ticketPrice = 7.5;
      } else if (roomType === 'luxury') {
        ticketPrice = 10.5;
      } else {
        ticketPrice = 13.5;
      }
      break;
    case 'Bohemian Rhapsody':
      if (roomType === 'normal') {
        ticketPrice = 7.35;
      } else if (roomType === 'luxury') {
        ticketPrice = 9.45;
      } else {
        ticketPrice = 12.75;
      }
      break;
    case 'Green Book':
      if (roomType === 'normal') {
        ticketPrice = 8.15;
      } else if (roomType === 'luxury') {
        ticketPrice = 10.25;
      } else {
        ticketPrice = 13.25;
      }
      break;
    case 'The Favourite':
      if (roomType === 'normal') {
        ticketPrice = 8.75;
      } else if (roomType === 'luxury') {
        ticketPrice = 11.55;
      } else {
        ticketPrice = 13.95;
      }
      break;
  }
  let total = ticketPrice * tickets;
  console.log(`${movieName} -> ${total.toFixed(2)} lv.`);
}
oscarsWeekInCinema(['Green Book', 'normal', '63']);
