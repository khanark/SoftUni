function birthdayParty(input) {
  const budged = Number(input);
  const priceForCake = budged * 0.2;
  const drinks = priceForCake * 0.55;
  const animator = budged / 3;
  const budgedNeededForCelebration = budged + priceForCake + drinks + animator;
}
birthdayParty(['3720']);
