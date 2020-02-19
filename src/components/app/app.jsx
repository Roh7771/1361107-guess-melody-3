import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: -1
    };
    // this._renderScreen = this._renderScreen.bind(this);
  }

  _renderScreen() {
    const {step} = this.state;
    const {errorsCount, questions} = this.props;
    const question = questions[step];
    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
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
                onAnswer={() => {
                  this.setState((prevState) => {
                    return {
                      step: prevState.step + 1
                    };
                  });
                }}
              />
            </GameScreen>
          );

        case `genre`:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => {
                    return {
                      step: prevState.step + 1
                    };
                  });
                }}
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
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        answers: PropTypes.array
      })
  ).isRequired
};

export default App;
