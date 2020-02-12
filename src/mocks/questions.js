const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: id++,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
      id: id++,
    }],
  }
];
