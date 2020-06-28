import {extend} from './utils';
import {GameType} from './mocks/data/const';
import questions from './mocks/data/questions';

const initialState = {
  mistakes: 0,
  step: -1,
  questions,
  maxMistakes: 3
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),
  incrementMistake: (question, gamerAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, gamerAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, gamerAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  }
};

const isArtistAnswerCorrect = (question, gamerAnswer) => {
  return question.song.artist === gamerAnswer.artist;
};

const isGenreAnswerCorrect = (question, gamerAnswer) => {
  return gamerAnswer.every((item, i) => {
    return item === (question.answers[i].genre === question.genre);
  });
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {
        step: nextStep
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
