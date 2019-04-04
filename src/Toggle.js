import React from "react";

class Toggle extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = { redText: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      redText: !state.redText
    }));
  } */

  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.redText ? "RED" : "BLUE"}
      </button>
    );
  }
}

export default Toggle;
