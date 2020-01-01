import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="containter">Hello world</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
