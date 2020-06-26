import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";
import {Settings} from '../../mocks/test/base.js';

Enzyme.configure({
  adapter: new Adapter()
});

const onWelcomeScreenButtonClick = jest.fn();

it(`Press button in Welcom`, () => {

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
