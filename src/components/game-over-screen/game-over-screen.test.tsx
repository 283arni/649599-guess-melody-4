import * as React from "react";
import * as renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen";
import {Router} from 'react-router-dom';
import history from '../../history';

const onReplayButtonClick = jest.fn();

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <GameOverScreen
            onReplayButtonClick={onReplayButtonClick}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
