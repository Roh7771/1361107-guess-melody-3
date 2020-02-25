import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";
import {ActionCreators} from "../../reducer.js";
import {connect} from "react-redux";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.js";

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends React.PureComponent {
  _renderScreen() {
    const {
      maxErrors,
      questions,
      onWelcomeButtonClick,
      onAnswer,
      step,
    } = this.props;
    const question = questions[step];
    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount={maxErrors}
          onWelcomeButtonClick={onWelcomeButtonClick}
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
    const {questions} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen renderPlayer={() => {}} question={questions[1]} onAnswer={() => {}} />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen renderPlayer={() => {}} question={questions[0]} onAnswer={() => {}} />
          </Route>
          <Route exact path="/dev-player">
            <AudioPlayer onPlayButtonClick={() => {}} src="https://upload.wikimedia.org/wikipedia/commons/d/d6/KV.265_12_Variations_on_Ah_vous_dirai-je%2C_Maman_Mozart_JMC%2C_Han.ogg" isPlaying={false}></AudioPlayer>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxErrors: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        answers: PropTypes.array
      })
  ).isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxErrors: state.maxErrors,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreators.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreators.incrementMistakes(question, answer));
    dispatch(ActionCreators.incrementStep());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
