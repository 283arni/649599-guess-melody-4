import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";
import {Settings} from '../../mocks/test/base.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Press button in Welcom`, () => {
  const onWelcomeScreenButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={onWelcomeScreenButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeScreenButtonClick).toHaveBeenCalled();
});
