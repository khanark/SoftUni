function calcPrice(people, type, days) {
  let totalSum = 0;

  const ticketTypePrice = function (student, business, regular) {
    if (type === 'Students') {
      totalSum = people * student;
      if (people >= 30) totalSum *= 0.85;
    } else if (type === 'Business') {
      if (people >= 100) {
        totalSum = (people - 10) * business;
      } else {
        totalSum = people * business;
      }
    } else if (type === 'Regular') {
      totalSum = people * regular;
      if (people >= 10 && people <= 20) totalSum *= 0.95;
    }
  };

  switch (days) {
    case 'Friday':
      ticketTypePrice(8.45, 10.9, 15);
      break;
    case 'Saturday':
      ticketTypePrice(9.8, 15.6, 20);
      break;
    case 'Sunday':
      ticketTypePrice(10.46, 16, 22.5);
      break;
  }

  console.log(`Total price: ${totalSum.toFixed(2)}`);
}
calcPrice(100, 'Business', 'Saturday');
