import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";
import {maxMistakes} from '../../mocks/test/base';

configure({
  adapter: new Adapter()
});

const onWelcomeScreenButtonClick = jest.fn();

it(`Press button in Welcom`, () => {

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={maxMistakes}
        onWelcomeScreenButtonClick={onWelcomeScreenButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeScreenButtonClick).toHaveBeenCalled();
});
