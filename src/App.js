import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Toggle />
      </div>
    );
  }
}

export default App;
