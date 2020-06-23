import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import {questionArtist} from '../../mocks/test/questions';

it(`render ArtistQuestionScreen`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={questionArtist}
        onAnswer={jest.fn()}
        renderPlayer={jest.fn()}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
