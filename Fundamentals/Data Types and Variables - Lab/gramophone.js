function findRoatations(bandName, albumName, songName) {
  let songDuration = (albumName.length * bandName.length * songName.length) / 2;
  let rotations = 0;

  while (songDuration > 0) {
    songDuration -= 2.5;
    rotations++;
  }

  console.log(`The plate was rotated ${rotations} times.`);
}
findRoatations('Rammstein', 'Sehnsucht', 'Engel');
