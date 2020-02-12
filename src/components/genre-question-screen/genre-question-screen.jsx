import React from "react";
import PropTypes from 'prop-types';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputsStatus: [false, false, false, false]
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {genre, answers} = question;
    const {inputsStatus} = this.state;
    return (
      <main className="app">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{position: `absolute`, left: `-1200em`}}
        >
          <filter id="blur">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
            ></feGaussianBlur>
            <feOffset dx="0" dy="0"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <section className="main" id="root">
          <section className="game game--genre">
            <header className="game__header">
              <a className="game__back" href="#">
                <span className="visually-hidden">Сыграть ещё раз</span>
                <img
                  className="game__logo"
                  src="img/melody-logo-ginger.png"
                  alt="Угадай мелодию"
                />
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="timer"
                viewBox="0 0 780 780"
              >
                <circle
                  className="timer__line"
                  cx="390"
                  cy="390"
                  r="370"
                  style={{
                    filter: `url(#blur)`,
                    transform: `rotate(-90deg) scaleY(-1)`,
                    transformOrigin: `center`
                  }}
                />
              </svg>

              <div className="game__mistakes">
                <div className="wrong"></div>
                <div className="wrong"></div>
                <div className="wrong"></div>
              </div>
            </header>

            <section className="game__screen">
              <h2 className="game__title">Выберите {genre} треки</h2>
              <form
                className="game__tracks"
                onSubmit={(e) => {
                  e.preventDefault();
                  onAnswer();
                }}
              >
                {answers.map((el, index) => {
                  return (
                    <div key={el.id} className="track">
                      <button
                        className="track__button track__button--play"
                        type="button"
                      ></button>
                      <div className="track__status">
                        <audio src={el.src}></audio>
                      </div>
                      <div className="game__answer">
                        <input
                          className="game__input visually-hidden"
                          type="checkbox"
                          name="answer"
                          checked={inputsStatus[index]}
                          value={`answer-${index + 1}`}
                          id={`answer-${index + 1}`}
                          onChange={(e) => {
                            const updatedInputStatus = [...inputsStatus];
                            updatedInputStatus[index] = e.target.checked;
                            this.setState({
                              inputsStatus: updatedInputStatus,
                            });
                          }}
                        />
                        <label
                          className="game__check"
                          htmlFor={`answer-${index + 1}`}
                        >
                          Отметить
                        </label>
                      </div>
                    </div>
                  );
                })}

                <button className="game__submit button" type="submit">
                  Ответить
                </button>
              </form>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    genre: PropTypes.string,
    answers: PropTypes.array,
  }).isRequired,
};

export default GenreQuestionScreen;
