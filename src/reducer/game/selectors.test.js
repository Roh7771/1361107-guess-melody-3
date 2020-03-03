import {getStep, getMistakes, getMaxMistakes} from "./selectors";
import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.GAME;

describe(`Selector`, () => {
  it(`Selector getStep must return current step`, () => {
    expect(getStep({[NAME_SPACE]: {step: 1}})).toBe(1);
  });

  it(`Selector getMistakes must return current mistakes count`, () => {
    expect(getMistakes({[NAME_SPACE]: {mistakes: 1}})).toBe(1);
  });

  it(`Selector getMaxMistakes must return max mistakes`, () => {
    expect(getMaxMistakes({[NAME_SPACE]: {maxMistakes: 3}})).toBe(3);
  });
});
