import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Headerr extends React.Component {
  render() {
    return (
      <div>
        <h1> Alorytmy sortowania </h1>
        <div>
          <Link to="/wykres"> Wykres </Link>
        </div>
      </div>
    );
  }
}

export default Headerr;
