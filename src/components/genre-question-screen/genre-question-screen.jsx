import React from "react";
import PropTypes from 'prop-types';
import GenreQuestionItem from "../genre-question-item/genre-question-item";

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
              <GenreQuestionItem
                key={`answer-${index}`}
                answer={el}
                index={index}
                renderPlayer={renderPlayer}
                inputsStatus={inputsStatus}
                onInputChange={onInputChange}
              />
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
