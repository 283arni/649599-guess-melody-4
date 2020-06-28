import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';
import {questionGenre} from '../../mocks/test/questions';

const onAnswer = jest.fn();
const renderPlayer = jest.fn();

it(`render GenreQuestionScreen`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={questionGenre}
      onAnswer={onAnswer}
      renderPlayer={renderPlayer}
    />), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
