import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from './artist-question-screen';
import {questionArtist} from '../../mocks/test/questions';

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const gamerAnswer = {
    artist: `John Snow`,
    picture: `https://api.adorable.io/avatars/128/0`,
  };

  const artistQuestion = shallow(
      <ArtistQuestionScreen
        question={questionArtist}
        onAnswer={onAnswer}
      />
  );

  const answerInputs = artistQuestion.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalled();
  expect(onAnswer.mock.calls[0][0]).toMatchObject(questionArtist);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(gamerAnswer);
});
