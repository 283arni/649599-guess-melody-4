import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {Settings} from '../../mocks/test/base.js';
import {questionArtist, questionGenre} from '../../mocks/test/questions';

it(`render App`, () => {
  const tree = renderer.create(
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={[questionGenre, questionArtist]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
