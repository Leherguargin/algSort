import React from "react";
import Wykres from "./Wykres";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { ButtonToolbar, Button } from "react-bootstrap";
import Algorytmy from "./backend";
import Navi from "./Navi";

export default class Wykresy extends React.Component {
  constructor(props) {
    super(props);
    this.generujDaneDoWykresu = this.generujDaneDoWykresu.bind(this);
  }

  generujDaneDoWykresu(odIlu, doIlu, coIle) {
    var daneDoWykresu = [];
    var i = 0;
    for (let j = odIlu; j < doIlu; j += coIle) {
      daneDoWykresu[i] = {
        name: j.toString(),
        bubble_sort_time: Algorytmy.bubbleSort(
          Algorytmy.generatorDanychLosowych(j)
        ),
        n: j
      };
      i++;
    }
    return daneDoWykresu;
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="col-md-2">
            <Navi />
          </nav>
          <section className="col-md-10">
            <Wykres
              szerokoscWykresu={(8 / 12) * window.innerWidth}
              wysokoscWykresu={(8 / 12) * window.innerHeight}
              dane={this.generujDaneDoWykresu(1600, 2000, 100)}
            />
          </section>
          <footer className="col-md-12"> </footer>
        </div>
      </div>
    );
  }
}
