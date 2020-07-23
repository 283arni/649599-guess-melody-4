import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionItem from "./genre-question-item";

const onChange = jest.fn();
const renderPlayer = jest.fn();

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`GenreQuestionItem is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionItem
      answer={answer}
      id={0}
      onChange={onChange}
      renderPlayer={renderPlayer}
      gamerAnswers={false}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});