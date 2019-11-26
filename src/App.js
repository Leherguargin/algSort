import "./App.css";
import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wykresy from "./Wykresy";
import NavBarr from "./Navbarr";
import Ciasteczko from "./Cookies";
import MaterialDesignTesting from "./MaterialDesignTesting";
import { Form, Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavBarr />

      <Route exact path="/wykresy">
        <Wykresy />
      </Route>

      <Route exact path="/cookies">
        <div className="text-primary">
          <h2> sekcja ciastek </h2> <Ciasteczko />
        </div>
      </Route>
      <Route path="/materialDesign">
        <MaterialDesignTesting />
      </Route>
    </Router>
  );
}
export default App;
