import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

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
            <ArtistQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => {
                  return {
                    step: prevState.step + 1
                  };
                });
              }}
            />
          );

        case `genre`:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => {
                  return {
                    step: prevState.step + 1
                  };
                });
              }}
            />
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
            <ArtistQuestionScreen question={questions[1]} onAnswer={() => {}} />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
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
