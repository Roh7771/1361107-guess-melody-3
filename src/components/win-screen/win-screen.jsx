import React from "react";
import PropTypes from "prop-types";


const WinScreen = (props) => {
  const {questionsAmount, mistakes, onReplayButtonClick} = props;
  const correctlyQuestionsCount = questionsAmount - mistakes;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakes} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={onReplayButtonClick}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  questionsAmount: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};


export default WinScreen;
