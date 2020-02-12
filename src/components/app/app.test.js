import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
let id = 1;
const questions = [
  {
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
  },
  {
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
  }
];

it(`Render App`, () => {
  const tree = renderer.create(<App errorsCount={4} questions={questions} />).toJSON();

  expect(tree).toMatchSnapshot();
});
