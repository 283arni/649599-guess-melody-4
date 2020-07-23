import * as React from "react";
import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from './genre-question-screen';
import {questionGenre} from '../../mocks/test/questions';

configure({
  adapter: new Adapter()
});

const onAnswer = jest.fn();
const onChange = jest.fn();
const renderPlayer = jest.fn();
const onAnswerClick = jest.fn((...args) => [...args]);

it(`form GenreQuestionScreen is not sent`, () => {

  const genreQuestion = shallow(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={questionGenre}
        renderPlayer={renderPlayer}
        onChange={onChange}
        gamerAnswers={[false, false, false, false]}
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
  const gamerAnswers = [false, true, false, false];

  const genreQuestion = mount(
      <GenreQuestionScreen
        onAnswer={onAnswerClick}
        question={questionGenre}
        renderPlayer={renderPlayer}
        onChange={onChange}
        gamerAnswers={gamerAnswers}
      />
  );

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault: jest.fn()});

  expect(onAnswerClick).toHaveBeenCalled();
  expect(onAnswer.mock.calls[0][0]).toEqual(undefined);
  expect(genreQuestion.find(`input`).map((item) => item.prop(`checked`))).toEqual(gamerAnswers);
});
