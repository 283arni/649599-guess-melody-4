import {extend} from '../../utils';
import {GameType} from '../../const';


const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
  GO_TO_WELCOME: `GO_TO_WELCOME`,
};

const isArtistAnswerCorrect = (question, gamerAnswer) => {
  return question.song.artist === gamerAnswer.artist;
};

const isGenreAnswerCorrect = (question, gamerAnswer) => {
  return gamerAnswer.every((item, i) => {
    return item === (question.answers[i].genre === question.genre);
  });
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
  },
  resetGame: () => {
    return {
      type: ActionType.RESET,
      payload: null,
    };
  },
  goToWelcome: () => {
    return {
      type: ActionType.GO_TO_WELCOME,
      payload: null,
    };
  },
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET:
      return extend(initialState, {
        step: 0,
      });
    case ActionType.GO_TO_WELCOME:
      return extend(initialState, {
        step: -1,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
