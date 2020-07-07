import {reducer, ActionCreator, ActionType} from "./game.js";
import {questionArtist, questionGenre} from '../../mocks/test/questions';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
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

it(`Reducer should return default`, () => {
  expect(reducer({
    step: 5,
    mistakes: 1,
  }, {
    type: ActionType.RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(reducer({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.RESET,
    payload: null,
  })).toEqual({
    step: 0,
    mistakes: 0,
    maxMistakes: 3,
  });
});

it(`Action creator for reset game returns action with null payload`, () => {
  expect(ActionCreator.resetGame())
    .toEqual({
      type: ActionType.RESET,
      payload: null,
    });
});
