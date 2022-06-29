function calcPreviousDay(y, m, d) {
    let date = new Date(y, m - 1, d);
    date.setDate(date.getDate() - 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
calcPreviousDay(2016, 10, 1)
