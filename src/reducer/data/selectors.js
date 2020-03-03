import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const randomFilter = () => {
  return Math.random() - 0.5;
};

export const getShaffledQuestions = createSelector(
    getQuestions,
    (questions) => {
      return [...questions].sort(() => randomFilter());
    }
);
