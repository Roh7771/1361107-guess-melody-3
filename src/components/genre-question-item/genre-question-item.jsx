import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenreQuestionItem extends PureComponent {
  render() {
    const {answer, index, inputsStatus, onInputChange, renderPlayer} = this.props;
    return (
      <div className="track">
        {renderPlayer(answer.src, index)}
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
  }
}

GenreQuestionItem.propTypes = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  inputsStatus: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GenreQuestionItem;

