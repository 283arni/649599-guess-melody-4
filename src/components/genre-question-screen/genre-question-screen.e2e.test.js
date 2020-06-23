import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from './genre-question-screen';
import {questionGenre} from '../../mocks/test/questions';

Enzyme.configure({
  adapter: new Adapter()
});

it(`form GenreQuestionScreen is not sent`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={questionGenre}
        renderPlayer={jest.fn()}
      />
  );

  const form = genreQuestion.find(`form`);
  const formSendPrevent = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevent
  });

  expect(onAnswer).toHaveBeenCalled();
  expect(formSendPrevent).toHaveBeenCalled();
});

it(`user ansver and prop "gamerAnswes" is match`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const gamerAnswers = [false, true, false, false];

  const genreQuestion = shallow(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={questionGenre}
        renderPlayer={jest.fn()}
      />
  );

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalled();
  expect(onAnswer.mock.calls[0][0]).toMatchObject(questionGenre);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(gamerAnswers);
  expect(genreQuestion.find(`input`).map((item) => item.prop(`checked`))).toEqual(gamerAnswers);
});
