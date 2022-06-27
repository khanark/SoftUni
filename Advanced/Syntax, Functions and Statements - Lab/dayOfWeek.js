function printNumber(string) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (days.includes(string)) {
        console.log(days.indexOf(string) + 1);
    } else {
        console.log("error");
    }
}
printNumber("Sunday")