import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

const question = {
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
};

it(`Should ArtistQuestionScreen render correctly`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen question={question} onAnswer={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
