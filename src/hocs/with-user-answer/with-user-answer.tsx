import * as React from 'react';
import {Subtract} from "utility-types";
import {QuestionGenre} from "../../types";

interface Props {
  question: QuestionGenre;
  onAnswer: (question: QuestionGenre, answers: Answer) => void;
}

interface State {
  answers: Answer;
}

interface InjectedProps {
  userAnswer: Answer;
  onChange: (answerIndex: number) => void;
  onAnswer: () => void;
}

type Answer = boolean[];

const withUserAnswer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithUserAnswer extends React.PureComponent<T, State> {

    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false),
      };

      this.handleAnswer = this.handleAnswer.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    handleChange(i, value) {
      const {answers} = this.state;

      const gamerAnswers = answers.slice(0);
      gamerAnswers[i] = value;

      this.setState({
        answers: gamerAnswers,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          gamerAnswers={this.state.answers}
          onAnswer={this.handleAnswer}
          onChange={this.handleChange}
        />
      );
    }
  }

  return WithUserAnswer;
};

export default withUserAnswer;
