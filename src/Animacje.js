import React from "react";
import "./styleAnimation.css";
import { gsap } from "gsap";
import { Row, Col, Button } from "react-bootstrap";

export default class Animacje extends React.Component {
  constructor(props) {
    super(props);
    this.tl = gsap.timeline();
    this.tab = null;
    this.trojkat = null;
    let tablicaDanych = [];
    for (let i = 0; i < 8; i++) {
      tablicaDanych[i] = Math.floor(Math.random() * 10) % 8;
    }
    this.state = {
      sortujDisabled: false,
      losujDisabled: false,
      dane: tablicaDanych
    };
    this.bubbleSortAnimation = this.bubbleSortAnimation.bind(this);
    this.randomValues = this.randomValues.bind(this);
  }

  componentDidMount() {
    this.tab = document.querySelectorAll(".element");
    this.trojkat = document.querySelectorAll(".triangle");
    console.log(this.trojkat);
    //for (let i = 0; i < 1000; i++)//test losowania
    //console.log(Math.floor(Math.random() * 10) % 8);
  }

  render() {
    const elementy = [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
      return (
        <div className="element">
          <p> {this.state.dane[index]} </p>
        </div>
      );
    });
    return (
      <main>
        <Row>
          <Col md="2" className="m-3">
            <nav>
              <div m="2">
                <Button
                  variant="outline-info"
                  onClick={this.bubbleSortAnimation}
                  disabled={this.state.sortujDisabled}
                  style={{ "margin-left": "auto", "margin-right": "auto" }}
                >
                  Sortuj{" "}
                </Button>{" "}
              </div>{" "}
              <div m="2">
                <Button
                  variant="outline-info"
                  onClick={this.randomValues}
                  disabled={this.state.losujDisabled}
                >
                  Losuj wartości{" "}
                </Button>{" "}
              </div>{" "}
            </nav>{" "}
          </Col>{" "}
          <Col
            md="10"
            style={{ "margin-left": "auto", "margin-right": "auto" }}
          >
            <div class="board"> {elementy} </div>{" "}
            <div class="boardTriangle">
              <div class="triangle"> </div> <div class="triangle"> </div>{" "}
              <div class="triangle"> </div> <div class="triangle"> </div>{" "}
              <div class="triangle"> </div> <div class="triangle"> </div>{" "}
              <div class="triangle"> </div> <div class="triangle"> </div>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
      </main>
    );
  }

  quickSortAnimation() {
    //nie dokończone
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
  }

  bubbleSortAnimation() {
    //sortowanie rosnąco, działa animacja, sortuje z flagą oraz pomijając juz wybrane minimalne elementy
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
    let swapped;
    let n = 0;
    do {
      swapped = false;
      for (let i = elements.length - 1; i > n; i--) {
        this.tl
          .to(this.trojkat[i], 1, { opacity: 1 })
          .to(this.trojkat[i - 1], 1, { opacity: 1 }, "-=1")
          .to(this.trojkat[i], 1, { opacity: 0 })
          .to(this.trojkat[i - 1], 1, { opacity: 0 }, "-=1");
        if (elements[i].innerText < elements[i - 1].innerText) {
          this.tl
            .to(elements[i], 1, { x: (x[i] += -67), y: -67 })
            .to(elements[i - 1], 1, { x: (x[i - 1] += 67), y: 67 }, "-=1")
            .to(elements[i], 1, { x: (x[i] += -67), y: 0 })
            .to(elements[i - 1], 1, { x: (x[i - 1] += 67), y: 0 }, "-=1");

          const temp = elements[i];
          elements[i] = elements[i - 1];
          elements[i - 1] = temp;

          const xx = x[i];
          x[i] = x[i - 1];
          x[i - 1] = xx;

          swapped = true;
        }
      }
      n++;
    } while (swapped);
    //this.setState({ losujDisabled: false });
  }

  randomValues() {
    for (let i = 0; i < this.tab.length; i++) {
      this.tab[i].innerText = Math.floor(Math.random() * 10) % 20;
    }
  }
}
