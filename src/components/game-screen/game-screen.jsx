import React from 'react';
import PropTypes from 'prop-types';

function GameScreen({type, children}) {
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
        <section className={`game game--${type}}`}>
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

          {children}
        </section>
      </section>
    </main>
  );
}

GameScreen.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default GameScreen;


