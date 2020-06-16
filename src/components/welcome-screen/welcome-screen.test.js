import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';
import {Settings} from '../../mocks/test/base.js';


it(`render WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
