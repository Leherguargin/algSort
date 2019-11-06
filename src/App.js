import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Wykres from "./Wykres";
import Navi from "./Navi";
import Sectionn from "./Sectionn";

function App() {
  return (
    <Router>
      <container
        class="container"
        role="main"
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <aside class="aside"> ASIDE </aside>
        <header class="header"> HEADERR </header>
        <nav class="nav">
          <Navi />
        </nav>
        <section class="section"></section>
        <footer class="footer">footer</footer>
      </container>
    </Router>
  );
}

export default App;
