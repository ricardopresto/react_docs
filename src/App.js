import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redText: true };
  }

  handleClick() {
    this.setState(state => ({
      redText: !state.redText
    }));
  }

  render() {
    return (
      <div>
        <Clock redText={this.state.redText} />
        <Toggle
          handleClick={this.handleClick.bind(this)}
          redText={this.state.redText}
        />
      </div>
    );
  }
}

export default App;
