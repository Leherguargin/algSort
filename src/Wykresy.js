import React from "react";
import Wykres from "./Wykres";
import Navi from "./Navi";

export default class Wykresy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wyswietlaneAlgorytmy: [true, false, false, true],
      dostepneAlgorytmy: ["quickSort", "selectionSort"],
      odIlu: 100,
      doIlu: 501,
      coIle: 100,
      daneDoWykresu: {},
    };

    //this.generujDaneDoWykresu = this.generujDaneDoWykresu.bind(this);
    this.obslugaNawigacji = this.obslugaNawigacji.bind(this);
  }

  obslugaNawigacji(e, algorytmy) {
    this.setState({ algorytmy });
    console.log(this.state);
  }

  componentDidMount() {
    fetch("localhost:8091/sort", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jakie_algorytmy: this.state.wyswietlaneAlgorytmy,
        odIlu: this.state.odIlu,
        doIlu: this.state.doIlu,
        coIle: this.state.coIle,
        jakieDane: "losowe",
      }),
    })
      .then((res) => res.json())
      .then((myJson) => {
        this.setState({ daneDoWykresu: myJson });
      })
      .catch((error) => {
        console.error("Był problem z fechem:", error);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="col-md-2">
            <Navi
              danePowrotne={this.obslugaNawigacji}
              dostepneAlgorytmy={this.state.dostepneAlgorytmy}
              wyswietlaneAlgorytmy={this.state.wyswietlaneAlgorytmy}
            />
          </nav>
          <section className="col-md-10">
            <Wykres
              szerokoscWykresu={(8 / 12) * window.innerWidth}
              wysokoscWykresu={(8 / 12) * window.innerHeight}
              dane={this.state.daneDoWykresu}
              jakieAlgorytmy={this.state.dostepneAlgorytmy}
              wyswietlaneAlgorytmy={this.state.wyswietlaneAlgorytmy}
            />
          </section>
          <footer className="col-md-12" />
        </div>
      </div>
    );
  }
}
