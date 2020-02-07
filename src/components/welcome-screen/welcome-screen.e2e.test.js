import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should welcome button be pressed`, () => {
  const welcomButtonHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={4}
        onWelcomeButtonClick={welcomButtonHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(welcomButtonHandler.mock.calls.length).toBe(1);
});
