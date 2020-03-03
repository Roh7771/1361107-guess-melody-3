import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import {ActionCreators} from "../../reducer/game/game.js";
import {connect} from "react-redux";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.js";
import GameOverScreen from "../game-over-screen/game-over-screen.jsx";
import WinScreen from "../win-screen/win-screen.jsx";
import {getStep, getMaxMistakes, getMistakes} from "../../reducer/game/selectors.js";
import {getQuestions} from "../../reducer/data/selectors.js";

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends React.PureComponent {
  _renderScreen() {
    const {
      maxMistakes,
      questions,
      onWelcomeButtonClick,
      onAnswer,
      step,
      mistakes,
      onReplayButtonClick
    } = this.props;
    const question = questions[step];
    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes > maxMistakes) {
      return (
        <GameOverScreen
          onReplayButtonClick={onReplayButtonClick}
        />
      );
    }

    if (step >= questions.length) {
      return (
        <WinScreen
          mistakes={mistakes}
          questionsAmount={questions.length}
          onReplayButtonClick={onReplayButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case `artist`:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );

        case `genre`:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
      }
    }

    return <p>Что-то пошло не так :(</p>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen renderPlayer={() => {}} question={[{}][0]} onAnswer={() => {}} />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen inputsStatus={[false, false, false, false]} onInputChange={() => {}} renderPlayer={() => {}} question={[{}][0]} onAnswer={() => {}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        answers: PropTypes.array
      })
  ).isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreators.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreators.incrementMistakes(question, answer));
    dispatch(ActionCreators.incrementStep());
  },
  onReplayButtonClick() {
    dispatch(ActionCreators.resetGame());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
