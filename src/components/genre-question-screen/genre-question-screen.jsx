import React from "react";
import PropTypes from 'prop-types';

class GenreQuestionScreen extends React.PureComponent {
  render() {
    const {question, onAnswer, renderPlayer, inputsStatus, onInputChange} = this.props;
    const {genre, answers} = question;
    return (
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
                {renderPlayer(el.src, index)}
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    checked={inputsStatus[index]}
                    value={`answer-${index + 1}`}
                    id={`answer-${index + 1}`}
                    onChange={() => {
                      onInputChange(index);
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
  inputsStatus: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
