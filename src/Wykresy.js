import React from "react";
import Wykres from "./Wykres";
import Algorytmy from "./backend.js";
import Navi from "./Navi";

export default class Wykresy extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
         stan: {
           bubble: true,
           bubbleFlag: false,
           quick: false,
           merge: false
         }
       };

    this.generujDaneDoWykresu = this.generujDaneDoWykresu.bind(this);
    this.obslugaNawigacji = this.obslugaNawigacji.bind(this);
  }

  obslugaNawigacji(e, stan) {
    //console.log(e);
    //console.log(stan);
    this.setState(this.state = {stan});
    console.log(this.state);
  }

  generujDaneDoWykresu(odIlu, doIlu, coIle) {
    var daneDoWykresu = [];
    var i = 0;
    for (let j = odIlu; j < doIlu; j += coIle) {
      let tab = Algorytmy.generatorDanychLosowych(j);
      daneDoWykresu[i] = {
        name: j.toString(),
        n: j
      };
      ///ify XDDDD
      if(this.state.stan.bubble){
        daneDoWykresu[i].bubble_sort_time = Algorytmy.bubbleSort(tab);
      }
      if(this.state.stan.bubbleFlag){
        daneDoWykresu[i].bubble_with_flag = Algorytmy.bubbleSortWithFlag(tab);
      }

      i++;
    }
    return daneDoWykresu;
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="col-md-2">
            <Navi danePowrotne={this.obslugaNawigacji} />
          </nav>
          <section className="col-md-10">
            <Wykres
              szerokoscWykresu={(8 / 12) * window.innerWidth}
              wysokoscWykresu={(8 / 12) * window.innerHeight}
              dane={this.generujDaneDoWykresu(1600, 6000, 100)}
            />
          </section>
          <footer className="col-md-12"> </footer>
        </div>
      </div>
    );
  }
}
