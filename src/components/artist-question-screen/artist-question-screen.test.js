import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import {questionArtist} from '../../mocks/test/questions';

it(`render ArtistQuestionScreen`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={questionArtist}
        onAnswer={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
