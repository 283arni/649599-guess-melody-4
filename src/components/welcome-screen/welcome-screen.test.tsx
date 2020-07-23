import * as React from 'react';
import * as renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';
import {maxMistakes} from '../../mocks/test/base.js';

const onWelcomeScreenButtonClick = jest.fn();

it(`render WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorsCount={maxMistakes}
        onWelcomeScreenButtonClick={onWelcomeScreenButtonClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
