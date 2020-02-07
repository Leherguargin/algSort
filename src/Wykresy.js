import React from "react";
import Wykres from "./Wykres";
import Navi from "./Navi";

export default class Wykresy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wyswietlaneAlgorytmy: [false, false, true, false],
      dostepneAlgorytmy: [
        "bubbleSort",
        "bubbleFlag",
        "recursiveQuickSort",
        "selectionSort"
      ],
      odIlu: 1000,
      doIlu: 5001,
      coIle: 500,
      daneDoWykresu: {}
    };

    //this.generujDaneDoWykresu = this.generujDaneDoWykresu.bind(this);
    this.obslugaNawigacji = this.obslugaNawigacji.bind(this);
  }

  obslugaNawigacji(e, algorytmy) {
    this.setState({ algorytmy });
    //console.log(this.state);
  }

  componentDidMount() {
    fetch("http://inzmlback.herokuapp.com/sort/quick-sort", {
      //localhost:8091/sort/quick-sort
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jakie_algorytmy: this.state.wyswietlaneAlgorytmy,
        odIlu: this.state.odIlu,
        doIlu: this.state.doIlu,
        coIle: this.state.coIle,
        jakieDane: "losowe"
      })
    })
      .then(res => res.json())
      .then(myJson => {
        this.state.daneDoWykresu = myJson;
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
