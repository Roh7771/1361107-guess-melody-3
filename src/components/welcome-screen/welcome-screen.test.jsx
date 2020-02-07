import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`<Albums /> should render Cinderella`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={5}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
