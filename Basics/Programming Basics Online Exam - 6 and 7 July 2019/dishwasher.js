function washer(input) {
  let bottles = Number(input[0])
  let totalDetergent = bottles * 750
  let detergentNeeded = 0
  let index = 1
  let command = input[index]
  let washedDishes = 0
  let washedPots = 0
  let isEnough = true

  while(command !== "End") {
      let dishes = Number(command)
      let pots = Number(command)
      if (index % 3 === 0) {
        washedPots += pots
        detergentNeeded += pots * 15
      } else {
        washedDishes += dishes
        detergentNeeded += dishes * 5
      }
      if(detergentNeeded > totalDetergent) {
        isEnough = false
        break
      }
      index++
      command = input[index]
    }
    let diff = Math.abs(detergentNeeded - totalDetergent)
    if(!isEnough) {
      console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    } else {
      console.log(`Detergent was enough!`);
      console.log(`${washedDishes} dishes and ${washedPots} pots were washed.`);
      console.log(`Leftover detergent ${totalDetergent - detergentNeeded} ml.`);
    }
}
washer(['2', '53', 'End', '55', '32', '25']);
