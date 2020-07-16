import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen";
import {Router} from 'react-router-dom';
import history from '../../history';

const onReplayButtonClick = jest.fn();

describe(`Should WinScreen render correctly`, () => {
  describe(`With 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <Router
              history={history}
            >
              <WinScreen
                questionsCount={3}
                mistakesCount={0}
                onReplayButtonClick={onReplayButtonClick}
              />
            </Router>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <Router
              history={history}
            >
              <WinScreen
                questionsCount={3}
                mistakesCount={1}
                onReplayButtonClick={onReplayButtonClick}
              />
            </Router>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
      .create(
          <Router
            history={history}
          >
            <WinScreen
              questionsCount={3}
              mistakesCount={0}
              onReplayButtonClick={onReplayButtonClick}
            />
          </Router>)
    .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
      .create(
          <Router
            history={history}
          >
            <WinScreen
              questionsCount={3}
              mistakesCount={1}
              onReplayButtonClick={onReplayButtonClick}
            />
          </Router>)
    .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
