function calcFood(arr) {
  let food = Number(arr[0] * 1000);
  let hay = Number(arr[1] * 1000);
  let cover = Number(arr[2] * 1000);
  const pigWeight = Number(arr[3] * 1000);

  let days = 1;

  while (days <= 30) {
    food -= 300;

    if (days % 2 === 0 && days != 0) {
      hay -= food * 0.05;
    }

    if (days % 3 === 0 && days != 0) {
      cover -= pigWeight / 3;
    }
    days++;
  }
  if (food > 0 && hay > 0 && cover > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  } else {
    console.log('Merry must go to the pet store!');
  }
}
calcFood(['10', '5', '5.2', '1']);
calcFood((["1",
"1.5",
"3",
"1.5"
])
)
