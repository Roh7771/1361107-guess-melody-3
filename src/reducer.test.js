import {reducer, ActionCreators, ActionType} from "./reducer.js";
import questions from "./mocks/questions";

describe(`Reducer work correctly`, () => {
  it(`Reducer return initial state for the first time`, () => {
    expect(reducer(void 0, {})).toEqual({
      mistakes: 0,
      step: -1,
      maxErrors: 3,
      questions,
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
