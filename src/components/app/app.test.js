import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {maxMistakes} from '../../mocks/test/base';
import {questionArtist, questionGenre} from '../../mocks/test/questions';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../mocks/const";

const mockStore = configureStore([]);

const onUserAnswer = jest.fn();
const onWelcomeButtonClick = jest.fn();
const resetGame = jest.fn();
const login = jest.fn();

it(`render App`, () => {
  const store = mockStore({
    [NameSpace.GAME]: {
      mistakes: 0,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={login}
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
    [NameSpace.GAME]: {
      mistakes: 3,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            login={login}
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
    [NameSpace.GAME]: {
      mistakes: 3,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            login={login}
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
    [NameSpace.GAME]: {
      mistakes: 3,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            login={login}
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
    [NameSpace.GAME]: {
      mistakes: 3,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.AUTH}
            login={login}
            maxMistakes={maxMistakes}
            mistakes={0}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={onUserAnswer}
            onWelcomeButtonClick={onWelcomeButtonClick}
            resetGame={resetGame}
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

it(`Render AuthScreen`, () => {
  const store = mockStore({
    [NameSpace.GAME]: {
      mistakes: 3,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            login={login}
            maxMistakes={maxMistakes}
            mistakes={0}
            questions={[questionGenre, questionArtist]}
            onUserAnswer={onUserAnswer}
            onWelcomeButtonClick={onWelcomeButtonClick}
            resetGame={resetGame}
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
