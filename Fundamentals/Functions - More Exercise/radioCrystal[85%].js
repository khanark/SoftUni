function monitorCrystal(array) {
  const desiredThickness = array.shift();

  let cuts = 0;
  let laps = 0;
  let grinds = 0;
  let etches = 0;
  let xrays = 0;
  let flag = false;

  function init() {
    cuts = 0;
    laps = 0;
    grinds = 0;
    etches = 0;
    xrays = 0;
  }
  function isRec(func) {
    if (func >= desiredThickness) {
      return true;
    } else {
      return false;
    }
  }

  const cut = microns => microns / 4;
  const lap = microns => microns - microns * 0.2;
  const grind = microns => microns - 20;
  const etch = microns => microns - 2;
  const xray = microns => microns + 1;
  const transport = microns => Math.floor(microns);

  for (let chunk of array) {
    init();
    console.log(`Processing chunk ${chunk} microns`);
    while (cut(chunk) >= desiredThickness) {
      cuts++;
      chunk = cut(chunk);
      if (cut(chunk) < desiredThickness) {
        chunk = transport(chunk);
        flag = true;
      }
    }
    if (cuts != 0 && flag) {
      console.log(`Cut x${cuts}`);
      console.log('Transporting and washing');
      flag = false;
    }

    while (lap(chunk) >= desiredThickness) {
      laps++;
      chunk = lap(chunk);
      if (lap(chunk) < desiredThickness) {
        chunk = transport(chunk);
        flag = true;
      }
    }
    if (laps != 0 && flag) {
      console.log(`Lap x${laps}`);
      console.log('Transporting and washing');
      flag = false;
    }
    while (grind(chunk) >= desiredThickness) {
      grinds++;
      chunk = grind(chunk);
      if (grind(chunk) < desiredThickness) {
        chunk = transport(chunk);
        flag = true;
      }
    }
    if (grinds != 0 && flag) {
      console.log(`Grind x${grinds}`);
      console.log('Transporting and washing');
      flag = false;
    }
    while (isRec(lap(chunk)) > desiredThickness) {
      etches++;
      chunk = etch(chunk);
      if (etch(chunk) < desiredThickness) {
        chunk = transport(chunk);
        flag = true;
      }
    }
    if (etches != 0 && flag) {
      console.log(`Etch x${etches}`);
      console.log('Transporting and washing');
      flag = false;
    }
    while (xray(chunk) <= desiredThickness) {
      xrays++;
      chunk = xray(chunk);
      flag = true;
    }
    if (xrays != 0 && flag) {
      console.log(`X-ray x${xrays}`);
      console.log('Transporting and washing');
      flag = false;
    }
    console.log(`Finished crystal ${chunk} microns`);
  }
}
monitorCrystal([1000, 4000, 8100]);
