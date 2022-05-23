function calcExpenses(
  fights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let armor = 0;

  for (let i = 1; i <= fights; i++) {
    if (i % 2 === 0) {
      brokenHelmet++;
    }

    if (i % 3 === 0) {
      brokenSword++;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      brokenShield++;
      
      if (brokenShield % 2 === 0) {
        armor++;
      }
    }
  }
  let total =
    brokenHelmet * helmetPrice +
    brokenSword * swordPrice +
    brokenShield * shieldPrice +
    armor * armorPrice;

  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
calcExpenses(23, 12.5, 21.5, 40, 200);
