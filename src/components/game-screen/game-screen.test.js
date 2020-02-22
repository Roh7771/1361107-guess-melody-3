import React from "react";
import renderer from "react-test-renderer";
import {GameScreen} from "./game-screen.jsx";

const mock = {
  types: [`artist`, `genre`],
  children: <p>What a wonderfull day</p>,
};

describe(`GameScreen render correctly`, () => {
  it(`with artist type`, () => {
    const {types, children} = mock;
    const tree = renderer.create(
        <GameScreen
          type={types[0]}
          mistakes={1}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with genre type`, () => {
    const {types, children} = mock;
    const tree = renderer.create(
        <GameScreen
          type={types[1]}
          mistakes={2}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

