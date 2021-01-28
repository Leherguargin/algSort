import "./App.css";
import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Wykresy from "./wykresy/Wykresy";
import NavBarr from "./navbar/Navbarr";
import Animacje from "./animacje/Animacje";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <NavBarr />
      <Route exact path="/wykresy">
        <Wykresy />
      </Route>
      <Route exact path="/animacje">
        <Animacje />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}
export default App;
