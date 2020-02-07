import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const Settings = {
  ERRORS_COUNT: 5
};

it(`<Albums /> should render Cinderella`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={Settings.ERRORS_COUNT}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
