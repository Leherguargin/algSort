import "./App.css";
import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navi from "./Navi";
import Sectionn from "./Sectionn";
import Headerr from "./Headerr";

function App() {
  return (
    <Router>
      <container
        className="container"
        role="main"
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div className="row">
          <header className="col-md-12">
            <Headerr />
          </header>

          <nav className="col-md-2">
            <Navi />
          </nav>
          <section className="col-md-10">
            <Sectionn />
          </section>
          <footer className="col-md-12"></footer>
        </div>
      </container>
    </Router>
  );
}
export default App;
