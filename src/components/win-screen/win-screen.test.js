import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen";

it(`Should WinScreen render correctly`, () => {
  const tree = renderer
    .create(
        <WinScreen
          onReplayButtonClick={() => {}}
          mistakes={5}
          questionsAmount={10}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
