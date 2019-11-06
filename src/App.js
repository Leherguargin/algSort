import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Wykres from "./Wykres";

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
          {/* <form onSubmit={this.handleSubmit}> */}
          <fieldset>
            <legend> Algorytmy </legend>
            <Alg nazwa={"merge sort"} />
            <Alg nazwa={"bubble sort"} />
            <Alg nazwa={"quick sort"} />
          </fieldset>
          {/* <button type="submit">Add</button> */}
          {/* </form> */}
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/dashboard"> Dashboard </Link>
            </li>
            <li>
              <Link to="/plot"> Plot </Link>
            </li>
          </ul>
        </nav>
        <section class="section">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/plot">
              <Wykres />
            </Route>
          </Switch>
        </section>
        <footer class="footer">footer</footer>
      </container>
    </Router>
  );
}

class Alg extends React.Component {
  render() {
    return (
      <div class="zawartosc">
        <label>
          <input type="checkbox" name="alg[]"></input>
          {this.props.nazwa}
        </label>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Link to="/inne">
        <h2> chodzmy do innych w stopce </h2>{" "}
      </Link>{" "}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2> About </h2>{" "}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2> Dashboard </h2>{" "}
    </div>
  );
}
export default App;
