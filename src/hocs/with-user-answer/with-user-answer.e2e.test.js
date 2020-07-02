import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer";
import {questionGenre} from '../../mocks/test/questions';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);
const onAnswer = jest.fn();


it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={questionGenre}
    onAnswer={onAnswer}
  />);

  expect(wrapper.props().gamerAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(0, true);
  expect(wrapper.props().gamerAnswers).toEqual([true, false, false, false]);

  wrapper.props().onChange(0, false);
  expect(wrapper.props().gamerAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(1, true);
  expect(wrapper.props().gamerAnswers).toEqual([false, true, false, false]);
});
