function monitorThicc(array) {
  let thicknessGoal = array.shift()

  let cuts = 0
  let laps = 0
  let grinds = 0
  let eches = 0
  let xrays = 0

  function isReccomended (i) {
    return i > thicknessGoal
  }
  function cut(chunk) { 
    let result = chunk / 4
    while (isReccomended(chunk)) {
      cuts++
    }
  }

  for (let i = 0; i < array.length; i++) {
    let currentChunk = array[i]
    while (currentChunk >= thicknessGoal) {

    }
  }
}
monitorThicc([1375, 50000])