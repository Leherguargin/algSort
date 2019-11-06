import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wykres from "./Wykres";
import Navi from "./Navi";
import Sectionn from "./Sectionn";
import Headerr from "./Headerr";

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
        <aside class="blok"> ASIDE </aside>
        <header class="blok">
          <Headerr />
        </header>
        <nav class="blok">
          <Navi />
        </nav>
        <section class="blok">
          <Sectionn />
        </section>
        <footer class="blok"> footer </footer>
      </container>
    </Router>
  );
}
export default App;
