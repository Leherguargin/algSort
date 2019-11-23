import React from "react";
import Wykres from "./Wykres";
import InputFileButton from "./InputFileButton";
import MaterialDesignTesting from "./MaterialDesignTesting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { ButtonToolbar, Button } from "react-bootstrap";
import Algorytmy from "./backend";
import Generator from "./backend";

export default class Sectionn extends React.Component {
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

  //componentDidMount() {}

  render() {
    return (
      <div>
        <Route exact path="/wykres">
          {console.log(
            Algorytmy.bubbleSort(Algorytmy.generatorDanychLosowych(10000))
          )}
          {console.log(
            Algorytmy.bubbleSort(Algorytmy.generatorDanychLosowych(10000))
          )}
          {console.log(
            Algorytmy.bubbleSort(Algorytmy.generatorDanychLosowych(10000))
          )}
          {console.log(
            Algorytmy.bubbleSort(Algorytmy.generatorDanychLosowych(10000))
          )}
          {/* <Wykres
            szerokoscWykresu={(8 / 12) * window.innerWidth}
            wysokoscWykresu={(8 / 12) * window.innerHeight}
            dane={this.generujDaneDoWykresu(40000, 50000, 10000)}
          /> */}
        </Route>

        <Route exact path="/cookies">
          <div className="text-primary">
            <h2> sekcja ciastek </h2> <Ciasteczko />
          </div>
        </Route>
        <Route path="/materialDesign">
          <MaterialDesignTesting />
        </Route>
      </div>
    );
  }
}

class Ciasteczko extends React.Component {
  constructor(props) {
    super(props);

    this.setCookie = this.setCookie.bind(this);
    this.showCookie = this.showCookie.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) {
      //czy ciasteczka są włączone
      const cookieName = encodeURIComponent(name);
      const cookieVal = encodeURIComponent(val);
      let cookieText = cookieName + "=" + cookieVal;

      if (typeof days === "number") {
        const data = new Date();
        data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
        cookieText += "; expires=" + data.toGMTString();
      }

      if (path) {
        cookieText += "; path=" + path;
      }
      if (domain) {
        cookieText += "; domain=" + domain;
      }
      if (secure) {
        cookieText += "; secure";
      }

      document.cookie = cookieText;
    }
  }

  showCookie(name) {
    if (document.cookie !== "") {
      const cookies = document.cookie.split(/; */);

      for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0];
        const cookieVal = cookies[i].split("=")[1];
        if (cookieName === decodeURIComponent(name)) {
          return decodeURIComponent(cookieVal);
        }
      }
    }
  }

  handleClick(e) {
    this.setCookie("mojeCiasteczko", "jegoWartosc");
  }

  handleClick2(e) {
    alert(this.showCookie("mojeCiasteczko"));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          Utwórz ciasteczko
        </button>
        <br />
        <button
          onClick={this.handleClick2}
          type="button"
          className="btn-outline-info"
        >
          Zjedź ciasteczko
        </button>
        <div>
          <InputFileButton buttonClass="outline-info" />
        </div>
      </div>
    );
  }
}
