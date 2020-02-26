const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/2/26/John_Hoopie_-_Don%27t_You_Know.ogg`,
      genre: `rock`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4d/2009-05-29MedBoogie.ogg`,
      genre: `blues`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/2/21/03_Turning_Points.ogg`,
      genre: `jazz`,
      id: id++,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Caleb_Baker_-_Crush_Song.ogg`,
      genre: `rock`,
      id: id++,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Mozart`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d6/KV.265_12_Variations_on_Ah_vous_dirai-je%2C_Maman_Mozart_JMC%2C_Han.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Mozart`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: id++,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Mozart`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d6/KV.265_12_Variations_on_Ah_vous_dirai-je%2C_Maman_Mozart_JMC%2C_Han.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Mozart`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: id++,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Mozart`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d6/KV.265_12_Variations_on_Ah_vous_dirai-je%2C_Maman_Mozart_JMC%2C_Han.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Mozart`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: id++,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Mozart`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d6/KV.265_12_Variations_on_Ah_vous_dirai-je%2C_Maman_Mozart_JMC%2C_Han.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `Mozart`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: id++,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: id++,
    }],
  }
];
