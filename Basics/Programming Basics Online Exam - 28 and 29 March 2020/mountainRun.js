function mountainRun(input) {
  const record = Number(input[0])
  let distance = Number(input[1])
  let secEachMeter = Number(input[2])

  let totalSeconds = distance * secEachMeter
  let incrementedSec = distance / 50
  incrementedSec = Math.trunc(incrementedSec) * 30
  let timeTotal = totalSeconds + incrementedSec
  let diff = Math.abs(timeTotal - record)
  
    if(timeTotal < record) {
      console.log(`Yes! The new record is ${timeTotal.toFixed(2)} seconds.`)
    } else {
      console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
mountainRun(["5554.36",
"1340",
"3.23"])

