import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";

let id = 1;
const question = {
  type: `genre`,
  genre: `blues`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
      id: id++
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: id++
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
      id: id++
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
      id: id++
    }
  ]
};

it(`Should GenreQuestionScreen render correctly`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen question={question} onAnswer={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
