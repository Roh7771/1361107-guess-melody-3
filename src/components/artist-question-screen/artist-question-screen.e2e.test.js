import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Bob Marley`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        picture: `somePath`,
        artist: `John Snow`,
        src: `somePath`,
        id: 1
      },
      {
        picture: `somePath`,
        artist: `Colin Boston`,
        src: `somePath`,
        id: 2
      },
      {
        picture: `somePath`,
        artist: `Tom Hardy`,
        src: `somePath`,
        id: 3
      }
    ]
  }
};

it(`When user answers artist question preventDefault() will work`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const artistQuestion = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const inputTwo = artistQuestion.find(`input`).at(1);
  const preventionFunc = jest.fn();
  inputTwo.simulate(`change`, {
    preventDefault: preventionFunc,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(preventionFunc).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is correct`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    picture: `somePath`,
    artist: `John Snow`,
    src: `somePath`,
    id: 1
  };

  const genreQuestion = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const inputOne = genreQuestion.find(`input`).at(0);

  inputOne.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
