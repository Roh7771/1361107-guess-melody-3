import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen";

it(`Should WinScreen render correctly`, () => {
  const tree = renderer
    .create(
        <WinScreen
          onReplayButtonClick={() => {}}
          mistakesCount={5}
          questionsCount={10}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
