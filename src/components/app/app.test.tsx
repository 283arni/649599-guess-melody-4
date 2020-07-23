import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app';
import {maxMistakes} from '../../mocks/test/base';
import {questionArtist, questionGenre} from '../../mocks/test/questions';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../const";

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
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
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
            onUserAnswer={onUserAnswer}
            onWelcomeButtonClick={onWelcomeButtonClick}
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
    [NameSpace.GAME]: {
      mistakes: 5,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
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
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
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
