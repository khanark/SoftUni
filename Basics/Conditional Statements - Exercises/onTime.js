function onTime(input) {
  let examTimeHour = Number(input[0]);
  let examTimeMinute = Number(input[1]);
  let arivalTimeHour = Number(input[2]);
  let arivalTimeMinute = Number(input[3]);

  let examTime = examTimeHour * 60 + examTimeMinute;
  let arivalTime = arivalTimeHour * 60 + arivalTimeMinute;

  if (arivalTime > examTime) {
    console.log("Late");
    let diff = Math.abs(examTime - arivalTime);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (h >= 1) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${m} minutes after the start`);
    }
  } else if (examTime === arivalTime || examTime - arivalTime <= 30) {
    console.log("On time");
    let diff = Math.abs(arivalTime - examTime);

    if (diff !== 0) {
      let m = diff % 60;
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log("Early");

    let diff = Math.abs(arivalTime - examTime);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (h >= 1) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}

