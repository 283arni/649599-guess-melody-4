import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';
import {GameScreen} from "./game-screen";
import {GameType, maxMistakes} from "../../mocks/test/base";
import history from '../../history';

const children = <div className="children-component" />;

const goToWelcome = jest.fn();

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.ARTIST}
            mistakes={maxMistakes}
            goToWelcome={goToWelcome}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.GENRE}
            mistakes={maxMistakes}
            goToWelcome={goToWelcome}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
