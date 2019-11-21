import "./App.css";
import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navi from "./Navi";
import Sectionn from "./Sectionn";
import NavBarr from "./Navbarr";

function App() {
  return (
    <Router>
      <NavBarr />
      <div className="row">
        <nav className="col-md-2">
          <Navi />
        </nav>
        <section className="col-md-10">
          <Sectionn />
        </section>
        <footer className="col-md-12"> </footer>
      </div>
    </Router>
  );
}
export default App;
