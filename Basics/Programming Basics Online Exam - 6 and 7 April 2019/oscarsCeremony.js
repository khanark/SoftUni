function oscarsCeremony(input) {
  let rent = Number(input[0]);
  let statues = rent * 0.7;
  let ceturing = statues * 0.85;
  let sounding = ceturing / 2;
  let total = rent + statues + ceturing + sounding;
  console.log(total.toFixed(2));
}
oscarsCeremony(['3500']);
