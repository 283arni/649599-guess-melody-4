import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';
import {questionGenre} from '../../mocks/test/questions';

it(`render GenreQuestionScreen`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={questionGenre}
      onAnswer={jest.fn()}
      renderPlayer={jest.fn()}
    />), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
