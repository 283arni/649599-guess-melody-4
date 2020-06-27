import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {maxMistakes} from '../../mocks/test/base.js';
import {questionArtist, questionGenre} from '../../mocks/test/questions';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const onUserAnswer = jest.fn();
const onWelcomeButtonClick = jest.fn();

it(`render App`, () => {
  const store = mockStore({
    mistakes: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          maxMistakes={maxMistakes}
          questions={[questionGenre, questionArtist]}
          onUserAnswer={onUserAnswer}
          onWelcomeButtonClick={onWelcomeButtonClick}
          step={-1}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render GenreQuestionScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={maxMistakes}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={onUserAnswer}
            onWelcomeButtonClick={onWelcomeButtonClick}
            step={0}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render ArtistQuestionScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={maxMistakes}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={onUserAnswer}
            onWelcomeButtonClick={onWelcomeButtonClick}
            step={0}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
