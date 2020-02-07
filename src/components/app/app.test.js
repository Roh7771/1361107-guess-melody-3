import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const Settings = {
  ERRORS_COUNT: 4
};

it(`<Albums /> should render Cinderella`, () => {
  const tree = renderer
    .create(<App
      errorsCount={Settings.ERRORS_COUNT}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

