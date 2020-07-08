import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import {questionArtist, questionGenre} from '../../mocks/test/questions';

const api = createApi(() => {});
const questions = [questionGenre, questionArtist];
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();
const questionLoader = Operation.loadQuestions();


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    questions: [],
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(reducer({
    questions: [],
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  })).toEqual({
    questions,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, function () {

    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUESTIONS,
          payload: [{fake: true}],
        });
      });
  });
});
