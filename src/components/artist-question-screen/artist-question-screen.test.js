import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import {questionArtist} from '../../mocks/test/questions';

const onAnswer = jest.fn();
const renderPlayer = jest.fn();

it(`render ArtistQuestionScreen`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={questionArtist}
        onAnswer={onAnswer}
        renderPlayer={renderPlayer}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
