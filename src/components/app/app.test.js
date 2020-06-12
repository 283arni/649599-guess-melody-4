import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {Settings, spaceHandler} from '../../mocks/test/base.js';


it(`App`, () => {
  const tree = renderer.create(
      <App
        errorsCount={Settings.ERRORS_COUNT}
        onWelcomeScreenButtonClick={spaceHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
