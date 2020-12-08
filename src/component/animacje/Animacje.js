import React from "react";
import "./styleAnimation.css";
import { gsap } from "gsap";
import { Button } from "react-bootstrap";
import Select from "react-select";
import opisyAlgorytmow from "./opisyAlgorytmow.json";

export default class Animacje extends React.Component {
  constructor(props) {
    super(props);
    this.tl = gsap.timeline();
    this.tab = null;
    this.trojkat = null;
    this.primaryColor = "#209781";
    let tablicaDanych = [];
    for (let i = 0; i < 8; i++) {
      tablicaDanych[i] = 8 - i;
    }
    this.state = {
      sortujDisabled: false,
      losujDisabled: false,
      dane: tablicaDanych,
      dostepneAlgorytmy: [
        { value: "quickSort", label: "quickSort" },
        { value: "selectionSort", label: "selectionSort" },
        { value: "bubbleSort", label: "bubbleSort" },
        { value: "insertionSort", label: "insertionSort" },
        { value: "mergeSort", label: "mergeSort" },
        { value: "heapSort", label: "heapSort" },
      ],
      wybranyAlgorytm: "selectionSort",
      opisDzialaniaAlgorytmu: opisyAlgorytmow["selectionSort"],
    };
    this.wybranyAlgorytm = "selectionSort";
    this.opisDzialaniaAlgorytmu = opisyAlgorytmow["selectionSort"];
    this.bubbleSortAnimation = this.bubbleSortAnimation.bind(this);
    this.randomValues = this.randomValues.bind(this);
  }

  componentDidMount() {
    this.tab = document.querySelectorAll(".element");
    this.trojkat = document.querySelectorAll(".triangle");
    //console.log(this.trojkat);
    //for (let i = 0; i < 1000; i++)//test losowania
    //console.log(Math.floor(Math.random() * 10) % 8);
  }

  handleSelectChange = (event) => {
    this.wybranyAlgorytm = event.label;
    this.opisDzialaniaAlgorytmu = opisyAlgorytmow[event.label];
  };

  changeTitleAndDescription = () => {
    this.setState({
      opisDzialaniaAlgorytmu: this.opisDzialaniaAlgorytmu,
      wybranyAlgorytm: this.wybranyAlgorytm,
    });
  };

  selectMethodAndSort = () => {
    switch (this.state.wybranyAlgorytm) {
      case "quickSort":
        this.quickSortAnimation();
        break;
      case "selectionSort":
        this.selectionSortAnimation();
        break;
      case "bubbleSort":
        this.bubbleSortAnimation();
        break;
      case "insertionSort":
        this.insertionSortAnimation();
        break;
      case "mergeSort":
        this.mergeSortAnimation();
        break;
      case "heapSort":
        this.heapSortAnimation();
        break;
      default:
        console.log("brak odpowidajacej metody sortujacej :(");
    }
  };

  render() {
    const elementy = [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
      return (
        <div className="element" key={index}>
          <p> {this.state.dane[index]} </p>
        </div>
      );
    });
    return (
      <main style={{ display: "flex" }}>
        <nav className="sidebar-menu">
          <div m="2">
            <Button
              variant="outline-info"
              onClick={this.selectMethodAndSort}
              disabled={this.state.sortujDisabled}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Sortuj
            </Button>
          </div>
          <div m="2">
            <Button
              variant="outline-info"
              onClick={this.randomValues}
              disabled={this.state.losujDisabled}
            >
              Losuj wartości
            </Button>
            <Select
              options={this.state.dostepneAlgorytmy}
              className="select"
              onChange={this.handleSelectChange}
              defaultInputValue={this.state.wybranyAlgorytm}
            />
            <Button
              variant="outline-info"
              onClick={this.changeTitleAndDescription}
            >
              Zastosuj
            </Button>
          </div>
        </nav>

        <section className="component">
          <h1
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
              merginTop: "20px",
              textAlign: "center",
            }}
          >
            {this.state.wybranyAlgorytm}
          </h1>
          <div className="board"> {elementy} </div>
          <div className="boardTriangle">
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
            <div className="triangle"> </div>
          </div>
          <div style={{ fontFamily: "Times New Roman", fontSize: 20 }}>
            {this.state.opisDzialaniaAlgorytmu}
          </div>
        </section>
      </main>
    );
  }

  quickSortAnimation() {
    //TODO dokincz metode
    alert("sortujemy quicksortem");
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
  }

  mergeSortAnimation() {
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
  }

  heapSortAnimation() {
    //sortowanie rosnąco
    //TODO do dokonczenia metoda
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
    console.log(elements);
    console.log(elements[0].innerText);
  }

  selectionSortAnimation() {
    //sortowanie rosnąco
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
    }
    //czerwony trójkąt wskazuje aktualne minimum, na żółto podświetla aktualnie porównywany element,
    //zielone to już posortowane elementy

    //START SORTOWANIA
    for (let k = 0; k < elements.length - 1; k++) {
      let min = elements[k];
      let minIndex = k;
      this.tl.to(this.trojkat[k], { duration: 1, opacity: 1 });
      for (let i = k + 1; i < elements.length; i++) {
        this.tl.to(elements[i], { duration: 1, backgroundColor: "yellow" });
        if (elements[i].innerText < min.innerText) {
          this.tl
            .to(this.trojkat[i], { duration: 1, opacity: 1 })
            .to(this.trojkat[minIndex], { duration: 1, opacity: 0 }, "-=1");
          min = elements[i];
          minIndex = i;
        }
        this.tl.to(elements[i], {
          duration: 1,
          backgroundColor: this.primaryColor,
        });
      }
      if (minIndex !== k) {
        this.tl
          .to(elements[k], { duration: 1, y: "-=132" }) //podniesienie do gory
          .to(min, { duration: 1, y: "-=132" }, "-=1")
          .to(elements[k], { duration: 1, x: "-=" + (k - minIndex) * 134 }) //zamiana
          .to(min, { duration: 1, x: "+=" + (k - minIndex) * 134 }, "-=1")
          .to(elements[k], { duration: 1, y: "+=132" }) //opuszczenie
          .to(min, { duration: 1, y: "+=132" }, "-=1");

        const temp = elements[k];
        elements[k] = min;
        elements[minIndex] = temp;
      }
      this.tl
        .to(this.trojkat[minIndex], { duration: 1, opacity: 0 })
        .to(min, { duration: 1, backgroundColor: "green" }, "-=1"); //zmiana koloru już posortowaego
    }
    this.tl.to(elements, { duration: 1, backgroundColor: this.primaryColor });
  }

  insertionSortAnimation() {
    //sorotwanie rosnąco
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = this.tab[i].innerText;
    }

    //START SORTOWANIA
    this.tl.to(elements[0], { duration: 1, backgroundColor: "green" });

    for (let i = 1; i < x.length; i++) {
      let wstawianyElement = elements[i];
      this.tl
        .to(elements[i], { duration: 0, backgroundColor: "red" })
        .to(elements[i], {
          duration: 1,
          y: "-=132",
        });
      let j = i - 1;
      while (j >= 0 && elements[j].innerText > wstawianyElement.innerText) {
        this.tl
          .to(elements[j + 1], { duration: 1, x: "-=134" })
          .to(elements[j], { duration: 1, x: "+=134" }, "-=1");

        elements[j + 1] = elements[j];
        j = j - 1;
        elements[j + 1] = wstawianyElement;
      }
      this.tl.to(wstawianyElement, {
        duration: 1,
        backgroundColor: "green",
        y: "+=132",
      });
    }
    this.tl.to(elements, { backgroundColor: this.primaryColor });
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
    console.log(this.tl.totalDuration());
    //this.setState({ losujDisabled: false, sortujDisabled: false });
    window.setTimeout(() => {
      this.setState({
        losujDisabled: false,
        sortujDisabled: false,
      });
    }, this.tl.totalDuration() * 1000);
  }

  randomValues() {
    let arr = [];
    arr.push(Math.floor(Math.random() * 10) % 20);
    this.tab[0].innerText = arr[0];
    for (let i = 1; i < this.tab.length; i++) {
      let r = Math.floor(Math.random() * 10) % 20;
      while (arr.includes(r)) {
        r = Math.floor(Math.random() * 10) % 20;
      }
      arr.push(r);
      this.tab[i].innerText = r;
    }
  }
}
