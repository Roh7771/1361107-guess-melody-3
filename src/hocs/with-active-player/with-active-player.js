import React, {PureComponent} from "react";
import Player from "../../components/audio-player/audio-player.jsx";
import withAudio from '../../hocs/with-audio/with-audio';

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0
      };
    }

    render() {
      const {activePlayerId} = this.state;
      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={id === activePlayerId}
                onPlayButtonClick={() =>
                  this.setState({
                    activePlayerId: activePlayerId === id ? -1 : id
                  })
                }
              ></AudioPlayer>
            );
          }}
        ></Component>
      );
    }
  }
  return WithActivePlayer;
};

export default withActivePlayer;
