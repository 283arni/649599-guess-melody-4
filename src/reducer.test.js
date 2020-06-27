import {reducer, ActionCreator, ActionType} from './reducer';
import {questionArtist, questionGenre} from './mocks/test/questions';

const questions = [questionGenre, questionArtist];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
    questions
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
  expect(ActionCreator.incrementMistake(questionArtist, questionArtist.song)).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
  expect(ActionCreator.incrementMistake(questionArtist, questionArtist.answers[1])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
  expect(ActionCreator.incrementMistake(questionGenre, [true, false, false, true])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
  expect(ActionCreator.incrementMistake(questionGenre, [true, true, true, true])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});
