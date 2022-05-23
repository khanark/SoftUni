function trekkingMania(input) {
  let groupsClimbers = Number(input.shift());
  let groups = Number(input.shift());
  let climbingMusala = 0;
  let climbingMonblan = 0;
  let climbingKalimadjaro = 0;
  let climbingK2 = 0;
  let climbingEverest = 0;
  let totalPeople = 0;

  for (let i = 1; i <= groupsClimbers; i++) {
    totalPeople += groups;
    if (groups <= 5) {
      climbingMusala += groups;
    } else if (groups >= 6 && groups <= 12) {
      climbingMonblan += groups;
    } else if (groups >= 13 && groups <= 25) {
      climbingKalimadjaro += groups;
    } else if (groups >= 26 && groups <= 40) {
      climbingK2 += groups;
    } else {
      climbingEverest += groups;
    }
    groups = Number(input.shift());
  }
  let percentageClimbingMusala = (climbingMusala / totalPeople) * 100;
  console.log(`${percentageClimbingMusala.toFixed(2)}%`);

  let percentageClimbingMonblan = (climbingMonblan / totalPeople) * 100;
  console.log(`${percentageClimbingMonblan.toFixed(2)}%`);

  let percentageClimbingKalimadjaro = (climbingKalimadjaro / totalPeople) * 100;
  console.log(`${percentageClimbingKalimadjaro.toFixed(2)}%`);

  let percentageClimbingK2 = (climbingK2 / totalPeople) * 100;
  console.log(`${percentageClimbingK2.toFixed(2)}%`);
  
  let percentageClimbingEverest = (climbingEverest / totalPeople) * 100;
  console.log(`${percentageClimbingEverest.toFixed(2)}%`);
}
trekkingMania([
  '10',
  '10',
  '5',
  '1',
  '100',
  '12',
  '26',
  '17',
  '37',
  '40',
  '78',
]);
