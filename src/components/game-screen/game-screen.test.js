import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";

const mock = {
  type: `artist`,
  children: <p>What a wonderfull day</p>,
};

it(`with type GameType.ARTIST`, () => {
  const {type, children} = mock;
  const tree = renderer.create(
      <GameScreen
        type={type}
      >
        {children}
      </GameScreen>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
