import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes";

describe(`GameScreen render correctly`, () => {
  it(`with count 0`, () => {
    const tree = renderer.create(
        <Mistakes
          count={0}
        >
        </Mistakes>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with count 1`, () => {
    const tree = renderer.create(
        <Mistakes
          count={1}
        >
        </Mistakes>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
