function renderSongs(arr) {
  class Song {
    constructor(type, name, time) {
      (this.type = type), (this.name = name), (this.time = time);
    }
  }
  arr.splice(0, 1);
  const typeList = arr.pop();
  const songs = [];

  for (const song of arr) {
    const [type, name, time] = song.split('_');
    const newSong = new Song(type, name, Number(time));
    songs.push(newSong);
  }

  if (typeList === 'all') {
    songs.forEach(song => console.log(song.name));
  } else {
    const filteredSongs = songs.filter(song => song.type === typeList);
    filteredSongs.forEach(song => console.log(song.name));
  }
}
renderSongs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
