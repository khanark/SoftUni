function solve() {
  const cast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });
  const fight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });
  const fighter = (name) => {
    const state = {
      name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(state, fight(state));
  };
  const mage = (name) => {
    const state = {
      name,
      health: 100,
      mana: 100,
    };

    return Object.assign(state, cast(state));
  };

  return { mage: mage, fighter: fighter };
}

// input
let create = solve();
const scorcher = create.mage("Scorcher");
console.log(scorcher);
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
