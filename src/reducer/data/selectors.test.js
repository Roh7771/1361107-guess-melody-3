import {getQuestions, getShaffledQuestions} from "./selectors";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/2/26/John_Hoopie_-_Don%27t_You_Know.ogg`,
      genre: `rock`,
      id: 1,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4d/2009-05-29MedBoogie.ogg`,
      genre: `blues`,
      id: 2,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/2/21/03_Turning_Points.ogg`,
      genre: `jazz`,
      id: 3,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Caleb_Baker_-_Crush_Song.ogg`,
      genre: `rock`,
      id: 4,
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
      id: 1,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: 2,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: 3,
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
      id: 1,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: 1,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: 1,
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
      id: 1,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: 1,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: 1,
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
      id: 1,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Bach`,
      id: 1,
    }, {
      picture: `${AVATAR_URL}/A`,
      artist: `Beethoven`,
      id: 1,
    }],
  }
];

describe(`Selector`, () => {
  it(`getQuestions must return questions`, () => {
    expect(getQuestions({DATA: {questions}})).toEqual(questions);
  });

  it(`getShaffledQuestions must return shaffled questions`, () => {
    expect(getShaffledQuestions({DATA: {questions}})).not.toEqual(questions);
  });
});


