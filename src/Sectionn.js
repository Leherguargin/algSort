import React from "react";
import Wykres from "./Wykres";
import MaterialDesignTesting from "./MaterialDesignTesting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ButtonToolbar, Button } from "react-bootstrap";

class Sectionn extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/wykres">
          <Wykres />
        </Route>

        <Route exact path="/cookies">
          <div className="text-primary">
            <h2>sekcja ciastek</h2>
            <Ciasteczko />
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
        <button onClick={this.handleClick2} type="button">
          Zjedź ciasteczko :)
        </button>
        <h1>Przegląd przycisków</h1>
        <ButtonToolbar>
          <Button variant="primary">Zastosuj</Button>
          <Button variant="secondary">Zastosuj</Button>
          <Button variant="success">Zastosuj</Button>
          <Button variant="warning">Zastosuj</Button>
          <Button variant="danger">Zastosuj</Button>
          <Button variant="info">Zastosuj</Button>
          <Button variant="light">Zastosuj</Button>
          <Button variant="dark">Zastosuj</Button>
          <Button variant="link">Zastosuj</Button>
          <Button variant="outline-primary">Zastosuj</Button>
          <Button variant="outline-secondary">Zastosuj</Button>
          <Button variant="outline-success">Zastosuj</Button>
          <Button variant="outline-warning">Zastosuj</Button>
          <Button variant="outline-danger">Zastosuj</Button>
          <Button variant="outline-info">Zastosuj</Button>
          <Button variant="outline-light">Zastosuj</Button>
          <Button variant="outline-dark">Zastosuj</Button>
          <Button variant="outline-link">Zastosuj</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Sectionn;
