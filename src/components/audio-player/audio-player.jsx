import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
    this._audioRef = createRef();
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this._audioRef.current.play();
    }
    if (!this.props.isPlaying) {
      this._audioRef.current.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  render() {
    const {isPlaying, isLoading} = this.state;
    const {onPlayButtonClick} = this.props;
    return (
      <div className="track">
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState((prevState) => {
              return {
                isPlaying: !prevState.isPlaying,
              };
            });
            onPlayButtonClick();
          }}
        >
        </button>
        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
