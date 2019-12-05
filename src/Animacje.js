import React from "react";
import "./styleAnimation.css";
import { gsap } from "gsap";
import { Row, Col } from "react-bootstrap";

export default class Animacje extends React.Component {
  constructor(props) {
    super(props);

    this.bubbleSortAnimation = this.bubbleSortAnimation.bind(this);
  }

  render() {
    return (
      <main>
        <Row>
          <Col md="3">
            <div style={{}}>
              <button className="type-info" onClick={this.bubbleSortAnimation}>
                Sortuj
              </button>
            </div>
          </Col>
          <Col md="9">
            <div class="board">
              <div class="element">
                <p>8</p>
              </div>
              <div class="element">
                <p>7</p>
              </div>
              <div class="element">
                <p>6</p>
              </div>
              <div class="element">
                <p>5</p>
              </div>
              <div class="element">
                <p>4</p>
              </div>
              <div class="element">
                <p>3</p>
              </div>
              <div class="element">
                <p>2</p>
              </div>
              <div class="element">
                <p>1</p>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    );
  }

  bubbleSortAnimation() {
    //sortowanie rosnąco, działa animacja
    const tl = gsap.timeline();
    let xD = document.querySelectorAll(".element");
    let elements = [];
    let x = [];
    for (let i = 0; i < xD.length; i++) {
      elements[i] = xD[i];
      x[i] = 0;
    }
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i].innerText > elements[i + 1].innerText) {
          tl.to(elements[i + 1], 1, { x: (x[i + 1] += -67), y: -67 })
            .to(elements[i], 1, { x: (x[i] += 67), y: 67 }, "-=1")
            .to(elements[i + 1], 1, { x: (x[i + 1] += -67), y: 0 })
            .to(elements[i], 1, { x: (x[i] += 67), y: 0 }, "-=1");

          const temp = elements[i];
          elements[i] = elements[i + 1];
          elements[i + 1] = temp;

          const xx = x[i];
          x[i] = x[i + 1];
          x[i + 1] = xx;

          swapped = true;
        }
      }
    } while (swapped);
  }
}
