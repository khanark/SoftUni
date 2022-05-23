function cake(input) {
  let cakePieces = Number(input[0]) * Number(input[1]);
  let index = 2;
  let pieces = Number(input[index]);
  let piecesLeft = 0;
  let action = input[index];
  let isValid = true;
  while (cakePieces >= 0) {
    if (action === "STOP") {
      isValid = false;
      break;
    }
    cakePieces -= pieces;
    index++;
    pieces = Number(input[index]);
    action = input[index];
  }
  if (!isValid) {
    console.log(`${Math.abs(cakePieces)} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(cakePieces)} pieces more.`
    );
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
