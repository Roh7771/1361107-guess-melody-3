import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {inputsStatus: [false, false, false, false]};

      this._handleAnswer = this._handleAnswer.bind(this);
      this._handleChange = this._handleChange.bind(this);
    }

    _handleAnswer() {
      const {question, onAnswer} = this.props;

      onAnswer(question, this.state.inputsStatus);
    }

    _handleChange(chosenInput) {
      const updatedInputStatus = [...this.state.inputsStatus];
      updatedInputStatus[chosenInput] = !updatedInputStatus[chosenInput];
      this.setState({
        inputsStatus: updatedInputStatus,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onAnswer={this._handleAnswer}
          onInputChange={this._handleChange}
          inputsStatus={this.state.inputsStatus}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      genre: PropTypes.string,
      answers: PropTypes.array,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
