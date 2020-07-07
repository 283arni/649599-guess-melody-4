import {createSelector} from 'reselect';
import NameSpace from '../name-space';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const randomFilter = () => {
  return Math.random() > 0.5;
};

export const getArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (questions, isSuccess) => {
      return questions.filter((question) => isSuccess && question.type === `artist`);
    }
);

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((question) => question.type === `genre`);
    }
);
