import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {Settings} from '../../mocks/test/base.js';


it(`render App`, () => {
  const tree = renderer.create(
      <App
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
