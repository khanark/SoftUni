function calcHours(pageNum, pageReadHour, days) {
  let totalTime = pageNum / pageReadHour;
  let reqHoursPerDay = totalTime / days;
  console.log(reqHoursPerDay);
}
calcHours(432, 15, 4);
