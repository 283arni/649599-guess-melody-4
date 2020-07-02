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
const resetGame = jest.fn();

it(`render App`, () => {
  const store = mockStore({
    mistakes: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          maxMistakes={maxMistakes}
          questions={[questionGenre, questionArtist]}
          mistakes={0}
          resetGame={resetGame}
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
            mistakes={0}
            resetGame={resetGame}
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
            mistakes={0}
            resetGame={resetGame}
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

it(`Render GameOverScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            mistakes={3}
            resetGame={resetGame}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={1}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render WinScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            mistakes={0}
            resetGame={resetGame}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={3}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
