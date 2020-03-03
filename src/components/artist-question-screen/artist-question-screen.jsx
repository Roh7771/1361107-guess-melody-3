import React from "react";
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({question, onAnswer, renderPlayer}) => {
  const {answers, song} = question;
  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      {renderPlayer(song.src, 0)}

      <form className="game__artist">
        {answers.map((el, index) => {
          return (
            <div key={`answer-${index}`} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio" name="answer" value={`answer-${index}`}
                id={`answer-${index}`}
                onChange={(e) => {
                  e.preventDefault();
                  onAnswer(question, el);
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
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;

