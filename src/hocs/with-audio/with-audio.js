import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
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
      const {isLoading, isPlaying} = this.state;
      const {onPlayButtonClick} = this.props;
      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayButtonClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayButtonClick();
          }}
        >
          <audio ref={this._audioRef}/>
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithAudio;
};

export default withAudio;
