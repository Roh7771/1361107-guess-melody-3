import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        src: `somePath`,
        genre: `rock`,
        id: 4,
      },
      {
        src: `somePath`,
        genre: `jazz`,
        id: 6,
      },
      {
        src: `somePath`,
        genre: `jazz`,
        id: 3,
      },
      {
        src: `somePath`,
        genre: `rock`,
        id: 7,
      },
    ],
  },
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const genreQuestion = shallow(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
    renderPlayer={() => {}}
  />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const onInputChange = jest.fn();
  const userAnswer = [false, true, false, false];

  const genreQuestion = mount(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
    renderPlayer={() => {}}
    inputsStatus={userAnswer}
    onInputChange={onInputChange}
  />);

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onInputChange).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(
      genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
