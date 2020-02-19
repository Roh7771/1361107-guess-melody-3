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
    const {question, onAnswer, renderPlayer} = this.props;
    const {genre, answers} = question;
    const {inputsStatus} = this.state;
    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(e) => {
            e.preventDefault();
            onAnswer(question, this.state.inputsStatus);
          }}
        >
          {answers.map((el, index) => {
            return (
              <div key={el.id} className="track">
                {renderPlayer(el.src, index)}
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
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    genre: PropTypes.string,
    answers: PropTypes.array,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
