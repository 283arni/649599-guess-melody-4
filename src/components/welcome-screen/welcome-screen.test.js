import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';
import {Settings, spaceHandler} from '../../mocks/test/base.js';


it(`WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={spaceHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
