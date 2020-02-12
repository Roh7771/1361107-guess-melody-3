import React from "react";
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {answers, song} = question;
  return (
    <main className="app">
      <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
          <feOffset dx="0" dy="0"></feOffset>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </svg>
      <section className="main" id="root">
        <section className="game game--artist">
          <header className="game__header">
            <a className="game__back" href="#">
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
              <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
            </svg>

            <div className="game__mistakes">
              <div className="wrong"></div>
              <div className="wrong"></div>
              <div className="wrong"></div>
            </div>
          </header>

          <section className="game__screen">
            <h2 className="game__title">Кто исполняет эту песню?</h2>
            <div className="game__track">
              <div className="track">
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={song.src}></audio>
                </div>
              </div>
            </div>

            <form className="game__artist">
              {answers.map((el, index) => {
                return (
                  <div key={el.id} className="artist">
                    <input
                      className="artist__input visually-hidden"
                      type="radio" name="answer" value={`answer-${index}`}
                      id={`answer-${index}`}
                      onChange={(e) => {
                        e.preventDefault();
                        onAnswer();
                      }}
                    />
                    <label className="artist__name" htmlFor={`answer-${index}`}>
                      <img className="artist__picture" src={el.picture} alt={el.artist}/>
                      {el.artist}
                    </label>
                  </div>
                );
              })}
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.array,
    song: PropTypes.shape({
      src: PropTypes.string,
      artist: PropTypes.string,
    })
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;

