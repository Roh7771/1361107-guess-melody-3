import Settings from "./mocks/settings";
import Questions from "./mocks/questions";
import {extend} from "./utils";

const initialState = {
  mistakes: 0,
  step: -1,
  errorsCount: Settings.ERRORS_COUNT,
  questions: Questions,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });
  }
  return state;
};

export default reducer;
