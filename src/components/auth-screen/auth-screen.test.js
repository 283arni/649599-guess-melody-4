import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";


const onReplayButtonClick = jest.fn();
const onSubmit = jest.fn();

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onReplayButtonClick={onReplayButtonClick}
        onSubmit={onSubmit}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
