import Settings from "./mocks/settings";
import Questions from "./mocks/questions";
import {extend} from "./utils";

const initialState = {
  mistakes: 0,
  step: -1,
  maxErrors: Settings.ERRORS_COUNT,
  questions: Questions,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const checkArtistQuestion = (question, answer) => {
  return question.song.artist === answer.artist;
};

const checkGenreQuestion = (question, answer) => {
  const correctAnswers = question.answers.map((el) => el.genre === question.genre);
  return JSON.stringify(correctAnswers) === JSON.stringify(answer);
};

const ActionCreators = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistakes: (question, answer) => {
    switch (question.type) {
      case `genre`:
        return {
          type: ActionType.INCREMENT_MISTAKES,
          payload: checkGenreQuestion(question, answer) ? 0 : 1
        };
      case `artist`:
        return {
          type: ActionType.INCREMENT_MISTAKES,
          payload: checkArtistQuestion(question, answer) ? 0 : 1
        };
    }
    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }
      return extend(state, {
        step: nextStep,
      });
  }
  return state;
};

export {reducer, ActionCreators, ActionType};
