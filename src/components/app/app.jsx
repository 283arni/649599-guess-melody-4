import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from '../welcome-screen/welcome-screen';
import {GameScreen} from '../game-screen/game-screen';
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import {GameType} from "../../mocks/data/const";
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player';

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);


class App extends PureComponent {

  _renderGameScreen() {
    const {maxMistakes, questions, onWelcomeButtonClick, onUserAnswer, step} = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeScreenButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
              mistakes={maxMistakes}
            >

              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
              mistakes={maxMistakes}
            >
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreenWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, gamerAnswer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, gamerAnswer));
  }
});


App.propTypes = {
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
