import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';
import {Settings} from '../../mocks/test/base.js';

const onWelcomeScreenButtonClick = jest.fn();

it(`render WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={onWelcomeScreenButtonClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
