import React from "react";
import InputFileButton from "./InputFileButton";

const wysokoscBoiska = 800;
const szerokoscBoiska = 1600;
const wielkoscBramki = 200;
var goraBramki = wysokoscBoiska / 2 - wielkoscBramki / 2;
var dolBramki = wysokoscBoiska / 2 + wielkoscBramki / 2;
var promienPolaKarnego = wysokoscBoiska / 2 - goraBramki / 2;

export default class Ciasteczko extends React.Component {
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
        <div className="row" style={{ margin: "0 auto", width: "50%" }}>
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
        <div className="row">
          <CanvasAndWebGLTests />
        </div>
      </div>
    );
  }
}

export class CanvasAndWebGLTests extends React.Component {
  constructor(props) {
    super(props);
    this.kanwa = null;
  }

  componentDidMount() {
    var kanwa = document.getElementById("glCanvas");
    if (kanwa.getContext) {
      var ctx = kanwa.getContext("2d");
      //ctx.fillStyle = "#F466F5";
      //ctx.fillRect(25, 25, 100, 100); //narysuj prostokąt z lewym rogiem w x,y o wymiarach 100 na 100
      //ctx.clearRect(45, 45, 60, 60); //wyczyść prostokąt
      //ctx.strokeStyle = "yellow";
      //ctx.strokeRect(50, 50, 50, 50); //narysuj obramowanie prostokąta

      //boisko:
      ctx.fillStyle = "#5E9223";
      ctx.fillRect(0, 0, szerokoscBoiska, wysokoscBoiska);
      ctx.fillStyle = "#FFF";
      ctx.lineWidth = 5;
      ctx.strokeRect(0, 0, szerokoscBoiska, wysokoscBoiska);

      //linie:
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(0, wysokoscBoiska / 2);
      ctx.lineTo(szerokoscBoiska, wysokoscBoiska / 2);
      ctx.stroke();

      ctx.moveTo(szerokoscBoiska / 2, 0);
      ctx.lineTo(szerokoscBoiska / 2, wysokoscBoiska);
      ctx.stroke();

      //bramki:
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.fillStyle = "red";
      ctx.arc(0, goraBramki, 10, 0, 2 * Math.PI);
      ctx.arc(0, dolBramki, 10, 0, 2 * Math.PI, true);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(0, goraBramki);
      ctx.lineTo(0, dolBramki);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(szerokoscBoiska, goraBramki, 10, 0, 2 * Math.PI);
      ctx.arc(szerokoscBoiska, dolBramki, 10, 0, 2 * Math.PI, true);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.moveTo(szerokoscBoiska, goraBramki);
      ctx.lineTo(szerokoscBoiska, dolBramki);
      ctx.stroke();

      //pola karne:
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.arc(
        0,
        wysokoscBoiska / 2,
        promienPolaKarnego,
        -Math.PI / 2,
        Math.PI / 2
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.arc(
        szerokoscBoiska,
        wysokoscBoiska / 2,
        promienPolaKarnego,
        Math.PI / 2,
        -Math.PI / 2
      );
      ctx.stroke();
      document.addEventListener("keydown", this.ruszajPilka(ctx));
    }
  }

  ruszajPilka(ctx) {
    alert("edfghjklkjhgfd");
    //window.setTimeout(this.gra(100, 200, ctx), 20);
  }

  gra(dx, dy, ctx) {
    ctx.setTransform(1, 0, 0, 1, dx, dy);
    //pilka:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(szerokoscBoiska / 2, wysokoscBoiska / 2, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.arc(szerokoscBoiska / 2, wysokoscBoiska / 2, 12, 0, 2 * Math.PI);
    ctx.stroke();
  }

  render() {
    return (
      <canvas
        id="glCanvas"
        width="1600"
        height="800"
        style={{ margin: "5px auto" }}
      ></canvas>
    );
  }
}
