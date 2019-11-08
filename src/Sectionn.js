import React from "react";
import Wykres from "./Wykres";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Sectionn extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/wykres">
          <Wykres />
        </Route>
      </div>
    );
  }
}

export default Sectionn;
