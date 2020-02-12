import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;
const question = {
  type: `artist`,
  song: {
    artist: `Bob Marley`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  },
  answers: [
    {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
      id: id++
    },
    {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Colin Boston`,
      id: id++
    },
    {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Tom Hardy`,
      id: id++
    }
  ]
};

it(`Should ArtistQuestionScreen render correctly`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen question={question} onAnswer={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
