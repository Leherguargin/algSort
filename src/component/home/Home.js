import React from "react";
import { gsap } from "gsap";
import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tl = gsap.timeline();
    this.tab = null;
    this.trojkat = null;
  }
  render() {
    return (
      <div className="container">
        {/* <button onClick={this.animate}>animuj</button>
        <div className="kwadrat"></div>
        <div className="kwadrat"></div>
        <div className="kwadrat">
          <p id="konsola"></p>
        </div> */}
      </div>
    );
  }

  animate = () => {
    console.log("animate :D");
    //const k = document.querySelectorAll(".kwadrat");

    //.from(k, { duration: 1, x: 100, y: 100 }); //do wyjazdów spoza ekranu itd... albo pojawiania

    this.sort([4, 5, 2, 6, 3, 2, 8, 9]);
  };

  sort(arr) {
    const x = [8, 7, 6, 5, 4, 3, 2, 1];

    const konsola = (...args) => {
      const kon = document.querySelector("#konsola");
      args.forEach((el) => (kon.innerText += el));
      kon.innerHTML += "<br>";
    };
  }
}