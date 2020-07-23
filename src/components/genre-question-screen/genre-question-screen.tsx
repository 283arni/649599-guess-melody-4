import * as React from "react";
import {QuestionGenre} from "../../types";
import GenreQuestionItem from "../genre-question-item/genre-question-item";

interface Props {
  onAnswer: () => void;
  onChange: () => void;
  question: QuestionGenre;
  renderPlayer: (src: string, id: number) => React.ReactNode;
  gamerAnswers: boolean[];
}

class GenreQuestionScreen extends React.PureComponent<Props, {}> {

  render() {
    const {question, renderPlayer, onChange, onAnswer, gamerAnswers} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {answers.map((answer, i) => (
            <GenreQuestionItem
              answer={answer}
              id={i}
              key={`${i}-${answer.src}`}
              onChange={onChange}
              renderPlayer={renderPlayer}
              gamerAnswers={gamerAnswers[i]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}


export default GenreQuestionScreen;