import React from "react";

const clockBlue = {
  color: "blue"
};

const clockRed = {
  color: "red"
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    if (this.props.redText) {
      return <h1 style={clockRed}>{this.state.date.toLocaleTimeString()}</h1>;
    } else {
      return <h1 style={clockBlue}>{this.state.date.toLocaleTimeString()}</h1>;
    }
  }
}

export default Clock;
