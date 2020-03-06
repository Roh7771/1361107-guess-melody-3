import {reducer, ActionType, ActionCreators} from "./game";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;

const questions = [
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

describe(`Reducer work correctly`, () => {
  it(`Reducer return initial state for the first time`, () => {
    expect(reducer(void 0, {})).toEqual({
      mistakes: 0,
      step: -1,
      maxMistakes: 3,
    });
  });

  it(`Reducer increase mistake count with increase mistake action and payload equals 1`, () => {
    expect(reducer({mistakes: 0}, {type: ActionType.INCREMENT_MISTAKES, payload: 1})).toEqual({
      mistakes: 1,
    });
  });

  it(`Reducer doesn't increase mistake count with increase mistake action and payload equals 1`, () => {
    expect(reducer({mistakes: 0}, {type: ActionType.INCREMENT_MISTAKES, payload: 0})).toEqual({
      mistakes: 0,
    });
  });

  it(`Reducer increase step count with increase step action and payload equals 1`, () => {
    expect(reducer({step: -1, questions}, {type: ActionType.INCREMENT_STEP, payload: 1})).toEqual({
      step: 0,
      questions
    });
  });

  it(`Reducer reset step and mistake counter when reset action is called`, () => {
    expect(reducer({step: questions.length, questions, mistakes: 2}, {type: ActionType.RESET_GAME})).toEqual({
      step: 0,
      questions,
      mistakes: 0
    });
  });
});

describe(`ActionCreators should work correctly`, () => {
  it(`ActionCreators for incrementing step return correct action`, () => {
    expect(ActionCreators.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`ActionCreators for incrementing mistake return action with payload 0 when artist question answer is correct`, () => {
    expect(ActionCreators.incrementMistakes(
        {
          type: `artist`,
          song: {
            artist: `Mozart`,
            src: ``,
          },
          answers: [{
            picture: ``,
            artist: `Mozart`,
          }, {
            picture: ``,
            artist: `Bach`,
          }, {
            picture: ``,
            artist: `Beethoven`,
          }],
        },
        {
          artist: `Mozart`,
          picture: ``,
        }
    )).toEqual(
        {
          type: ActionType.INCREMENT_MISTAKES,
          payload: 0
        }
    );
  });

  it(`ActionCreators for incrementing mistake return action with payload 1 when artist question answer is incorrect`, () => {
    expect(ActionCreators.incrementMistakes(
        {
          type: `artist`,
          song: {
            artist: `Mozart`,
            src: ``,
          },
          answers: [{
            picture: ``,
            artist: `Mozart`,
          }, {
            picture: ``,
            artist: `Bach`,
          }, {
            picture: ``,
            artist: `Beethoven`,
          }],
        },
        {
          artist: `Bach`,
          picture: ``,
        }
    )).toEqual(
        {
          type: ActionType.INCREMENT_MISTAKES,
          payload: 1
        }
    );
  });

  it(`ActionCreators for incrementing mistake return action with payload 0 when genre question answer is correct`, () => {
    expect(ActionCreators.incrementMistakes(
        {
          type: `genre`,
          genre: `rock`,
          answers: [{
            src: ``,
            genre: `rock`,
          }, {
            src: ``,
            genre: `blues`,
          }, {
            src: ``,
            genre: `jazz`,
          }, {
            src: ``,
            genre: `rock`,
          }],
        }, [true, false, false, true]
    )).toEqual(
        {
          type: ActionType.INCREMENT_MISTAKES,
          payload: 0
        }
    );
  });

  it(`ActionCreators for incrementing mistake return action with payload 1 when genre question answer is incorrect`, () => {
    expect(ActionCreators.incrementMistakes(
        {
          type: `genre`,
          genre: `rock`,
          answers: [{
            src: ``,
            genre: `rock`,
          }, {
            src: ``,
            genre: `blues`,
          }, {
            src: ``,
            genre: `jazz`,
          }, {
            src: ``,
            genre: `rock`,
          }],
        }, [false, false, false, true]
    )).toEqual(
        {
          type: ActionType.INCREMENT_MISTAKES,
          payload: 1
        }
    );
  });

  it(`ActionCreators for reseting game returns correct action`, () => {
    expect(ActionCreators.resetGame()).toEqual(
        {
          type: ActionType.RESET_GAME,
        }
    );
  });
});
