function histogram(input) {
  let num = Number(input[0]);
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;
  for (let i = 1; i <= num; i++) {
    let currentNum = input[i];
    if (currentNum < 200) {
      p1Counter++;
    } else if (currentNum >= 200 && currentNum <= 399) {
      p2Counter++;
    } else if (currentNum >= 400 && currentNum <= 599) {
      p3Counter++;
    } else if (currentNum >= 600 && currentNum <= 799) {
      p4Counter++;
    } else if (currentNum >= 800) {
      p5Counter++;
    }
  }
  const calcPercent = (paragraph) => (paragraph / num) * 100;
  let counters = [p1Counter, p2Counter, p3Counter, p4Counter, p5Counter];
  for (let i = 0; i <= counters.length - 1; i++) {
    console.log(`${calcPercent(counters[i]).toFixed(2)}%`);
  }
}