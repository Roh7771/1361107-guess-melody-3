import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`<Albums /> should render Cinderella`, () => {
  const tree = renderer
    .create(<App
      errorsCount={4}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

