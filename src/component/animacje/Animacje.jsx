import React from "react";
import "./styleAnimation.css";
import { gsap } from "gsap";
import { Button } from "react-bootstrap";
import Select from "react-select";
import opisyAlgorytmow from "./opisyAlgorytmow.json";
import SimpleModal from "./schematyBlokowe";
import Histogram from "./Histogram";
import MergeArrays from "./MergeArrays";

export default class Animacje extends React.Component {
  constructor(props) {
    super(props);
    this.tl = gsap.timeline().addLabel("start");
    this.tab = null;
    this.trojkat = null;
    this.mergeArrays = [];
    this.primaryColor = "#209781";
    let tablicaDanych = [];
    // for (let i = 0; i < 8; i++) {//dane od 8 do 0
    //   tablicaDanych[i] = 8 - i;
    // }
    //dane na sztywno
    tablicaDanych[0] = 3;
    tablicaDanych[1] = 1;
    tablicaDanych[2] = 9;
    tablicaDanych[3] = 6;
    tablicaDanych[4] = 7;
    tablicaDanych[5] = 0;
    tablicaDanych[6] = 2;
    tablicaDanych[7] = 4;
    this.state = {
      mergeArrays: [],
      sortujDisabled: false,
      losujDisabled: false,
      zastosujDisabled: false,
      resetDisabled: true,
      pauseDisabled: true,
      dane: tablicaDanych,
      dostepneAlgorytmy: [
        { value: "quickSort", label: "sortowanie szybkie" },
        { value: "selectionSort", label: "sortowanie przez wybór" },
        { value: "bubbleSort", label: "sortowanie bąbelkowe" },
        { value: "insertionSort", label: "sortowanie przez wstawianie" },
        { value: "mergeSort", label: "sortowanie przez scalanie" },
        { value: "heapSort", label: "sortowanie przez kopcowanie" },
        { value: "countingSort", label: "sortowanie przez zliczanie" },
      ],
      wybranyAlgorytm: "sortowanie przez scalanie",
      opisDzialaniaAlgorytmu: opisyAlgorytmow["sortowanie przez scalanie"],
    };
    this.wybranyAlgorytm = "sortowanie przez scalanie";
    this.opisDzialaniaAlgorytmu = opisyAlgorytmow["sortowanie przez scalanie"];
    this.quickSortNowa = 0;
    this.color = ["yellow", "pink", "purple", "gray", "orange", "cyan"];
  }

  componentDidMount() {
    this.tab = document.querySelectorAll(".element");
    this.trojkat = document.querySelectorAll(".triangle");
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
    this.setState({
      losujDisabled: true,
      sortujDisabled: true,
      zastosujDisabled: true,
      resetDisabled: false,
      pauseDisabled: false,
    });
    switch (this.state.wybranyAlgorytm) {
      case "sortowanie szybkie":
        this.quickSortAnimation();
        break;
      case "sortowanie przez wybór":
        this.selectionSortAnimation();
        break;
      case "sortowanie bąbelkowe":
        this.bubbleSortAnimation();
        break;
      case "sortowanie przez wstawianie":
        this.insertionSortAnimation();
        break;
      case "sortowanie przez scalanie":
        this.mergeSortAnimation();
        break;
      case "sortowanie przez kopcowanie":
        this.heapSortAnimation();
        break;
      case "sortowanie przez zliczanie":
        this.countingSortAnimation();
        break;
      default:
        console.log("brak odpowidajacej metody sortujacej :(");
    }
  };

  resetAnimation = () => {
    //wraca na początek animacji
    this.tl.seek("start"); //wraca do początkowego stanu animacji
    this.tl.kill(); //usuwa animacje
    this.tl = gsap.timeline().addLabel("start"); //tworzy nową animacje
    this.setState({
      sortujDisabled: false,
      losujDisabled: false,
      zastosujDisabled: false,
    });
  };

  pauseOrUnPause = (event) => {
    if (event.target.innerText === "Zatrzymaj") {
      this.tl.pause();
      event.target.innerText = "Wznów";
    } else {
      this.tl.resume();
      event.target.innerText = "Zatrzymaj";
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
    const histo =
      this.state.wybranyAlgorytm === "sortowanie przez zliczanie" ? (
        <Histogram />
      ) : null;
    const mergeArraysComponent =
      this.state.mergeArrays.length !== 0 ? (
        <MergeArrays data={this.state.mergeArrays} />
      ) : null;
    return (
      <main style={{ display: "flex" }}>
        <nav className="sidebar-menu">
          <div m="2">
            <Button
              variant="outline-info"
              onClick={this.selectMethodAndSort}
              disabled={this.state.sortujDisabled}
              className="btnMy"
            >
              Sortuj
            </Button>
          </div>
          <div m="2">
            <Button
              variant="outline-info"
              onClick={this.randomValues}
              disabled={this.state.losujDisabled}
              className="btnMy"
            >
              Losuj wartości
            </Button>
            <div className="select-form">
              <div m="2">
                <Select
                  options={this.state.dostepneAlgorytmy}
                  className="select"
                  onChange={this.handleSelectChange}
                  defaultInputValue={this.state.wybranyAlgorytm}
                />
              </div>

              <div m="2">
                <Button
                  variant="outline-info"
                  onClick={this.changeTitleAndDescription}
                  disabled={this.state.zastosujDisabled}
                  className="btnMy"
                >
                  Zastosuj
                </Button>
              </div>
            </div>

            <div m="2">
              <Button
                variant="outline-info"
                onClick={this.resetAnimation}
                className="btnMy"
                disabled={this.state.resetDisabled}
              >
                Reset
              </Button>
            </div>
            <div m="2">
              <Button
                variant="outline-info"
                onClick={this.pauseOrUnPause}
                className="btnMy"
                disabled={this.state.pauseDisabled}
              >
                Zatrzymaj
              </Button>
            </div>
            <SimpleModal
              alg={this.state.wybranyAlgorytm}
              d={"diagrams"}
              title="Schemat blokowy"
            />
            <SimpleModal
              alg={this.state.wybranyAlgorytm}
              d={"pseudocodes"}
              title={"Pseudokod"}
            />
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
          {histo}
          {mergeArraysComponent}
          <div style={{ fontFamily: "Times New Roman", fontSize: 20 }}>
            {this.state.opisDzialaniaAlgorytmu}
          </div>
        </section>
      </main>
    );
  }

  quickSortAnimation = () => {
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 134 * i;
    }
    //Start sortowania
    this.quickSort(elements, x, 0, elements.length - 1);
  };

  swap = (items, x, leftIndex, rightIndex) => {
    this.tl
      .to(items[leftIndex], { duration: 1, y: "-=135" }) //podniesienie do gory
      .to(items[rightIndex], { duration: 1, y: "-=135" }, "-=1")
      .to(items[leftIndex], {
        duration: 1,
        x: `+=${x[rightIndex] - x[leftIndex]}`,
      })
      .to(
        items[rightIndex],
        { duration: 1, x: `+=${x[leftIndex] - x[rightIndex]}` },
        "-=1"
      )
      .to(items[leftIndex], { duration: 1, y: "+=135" }) //opuszczenie
      .to(items[rightIndex], { duration: 1, y: "+=135" }, "-=1");

    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  };

  partition = (items, x, left, right) => {
    let pivot = items[Math.floor((right + left) / 2)],
      i = left, //left pointer
      j = right; //right pointer

    //malujemy pivot na czerowny
    this.tl.to(pivot, {
      duration: 1,
      backgroundColor: "red",
    });
    while (i <= j) {
      //left na pierwszy element
      this.tl
        .to(this.trojkat[i], { duration: 0, borderBottomColor: "#f34a53" })
        .to(this.trojkat[i], { duration: 1, opacity: 1 });

      //szukamy mniejszego od pivota od początku tablicy (od lewej)
      while (items[i].innerText < pivot.innerText) {
        i++;
        this.tl
          .to(this.trojkat[i], { duration: 0, borderBottomColor: "#f34a53" })
          .to(this.trojkat[i], { duration: 1, opacity: 1 })
          .to(this.trojkat[i - 1], { duration: 1, opacity: 0 }, "-=1");
      }

      //right na ostatni element
      this.tl
        .to(this.trojkat[j], { duration: 0, borderBottomColor: "blue" })
        .to(this.trojkat[j], {
          duration: 1,
          opacity: 1,
        });

      //szukamy większego od pivota od konca tablicy (od prawej)
      while (items[j].innerText > pivot.innerText) {
        j--;
        this.tl
          .to(this.trojkat[j], { duration: 0, borderBottomColor: "blue" })
          .to(this.trojkat[j], {
            duration: 1,
            opacity: 1,
          })
          .to(this.trojkat[j + 1], { duration: 1, opacity: 0 }, "-=1");
      }
      this.tl
        .to(this.trojkat[j], { duration: 1, opacity: 0 })
        .to(this.trojkat[i], { duration: 1, opacity: 0 }, "-=1");
      if (i <= j) {
        this.swap(items, x, i, j);
        i++;
        j--;
      }
    }
    //zmiana koloru pivota
    this.tl.to(pivot, {
      duration: 0,
      backgroundColor: this.primaryColor,
    });

    return i;
  };

  quickSort = (items, x, left, right) => {
    let index;
    if (items.length > 1) {
      index = this.partition(items, x, left, right);
      if (left < index - 1) {
        //podział na podtablice (zmiana koloru)
        for (let i = left; i < index; i++) {
          this.tl.to(items[i], {
            duration: 0,
            borderColor: this.color[this.quickSortNowa],
          });
        }
        if (this.quickSortNowa >= this.color.length) {
          this.quickSortNowa = -1;
        }
        this.quickSortNowa++;

        this.quickSort(items, x, left, index - 1);
      }
      if (index < right) {
        this.quickSort(items, x, index, right);
      }
    }
    return items;
  };

  mergeSortAnimation = () => {
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 134 * i;
    }
    const arr = elements.map((e) => e.innerText);
    const sorted = this.mergeSort(arr);
    // console.log(this.mergeArrays);
    // this.setState({ mergeArrays: this.mergeArrays });
    // const arrayki = document.querySelectorAll("#arrayki");
    // this.tl.to(arrayki, { duration: 1, display: "none" });
  };

  mergeSort = (arr) => {
    print(arr);
    this.mergeArrays.push(arr);
    this.setState({ mergeArrays: [arr] });
    const n = arr.length;
    if (n === 1) return arr;

    if (n > 1) {
      //dziel:
      let L = arr.slice(0, n / 2);
      let R = arr.slice(n / 2, n);
      // let tabL = arr.slice(0, n / 2);
      // let tabR = arr.slice(n / 2, n);
      // let arrayka = [tabL, tabR, ...this.state.mergeArrays];
      // this.setState({ mergeArrays: arrayka });

      //sortuj
      let a = this.mergeSort(L);
      let b = this.mergeSort(R);
      return this.mergeTwoSortedArrays(a, b);
    }
  };

  mergeTwoSortedArrays = (a, b) => {
    const c = new Array(a.length + b.length);
    let i = 0,
      j = 0;

    while (i < a.length && j < b.length) {
      if (a[i] > b[j]) {
        c[i + j] = b[j];
        j += 1;
      } else {
        c[i + j] = a[i];
        i += 1;
      }
    }

    while (j < b.length) {
      c[i + j] = b[j];
      j += 1;
    }

    while (i < a.length) {
      c[i + j] = a[i];
      i += 1;
    }
    print(c);
    this.mergeArrays.push(c);
    this.setState({ mergeArrays: [c] });
    return c;
  };

  heapSortAnimation = () => {
    //sortowanie rosnąco
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 134 * i;
    }

    //start sortowania -----------------------------
    print(elements);
    this.heapSort(elements, x);
    print(elements);
  };

  heapSort = (arr, x) => {
    let n = arr.length;

    //tworzymy kopiec z tablicy
    for (let i = n; i > -1; i--) {
      this.tl.to(arr[i], { duration: 1, backgroundColor: "yellow" }, "-=1");
    }
    for (let i = Math.floor(n / 2) - 1; i > -1; i--) {
      this.heapify(arr, n, i, x);
    }

    //zamieniamy pierwszy element z ostatnim i tworzymy kopiec z elementów bez ostatniego
    for (let i = n - 1; i > 0; i--) {
      this.swap(arr, x, 0, i);
      this.tl.to(arr[i], { duration: 1, backgroundColor: this.primaryColor });
      this.heapify(arr, i, 0, x);
    }
    this.tl.to(arr[0], { duration: 1, backgroundColor: this.primaryColor });
  };

  heapify = (arr, n, i, x) => {
    let max = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    // this.tl.to();
    if (l < n && arr[l].innerText > arr[max].innerText) {
      max = l;
    }

    if (r < n && arr[r].innerText > arr[max].innerText) {
      max = r;
    }

    if (max !== i) {
      this.swap(arr, x, i, max);
      this.heapify(arr, n, max, x);
    }
  };

  countingSortAnimation = () => {
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
    }
    //start sortowania
    const his = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //0 - 9 czyli 10 możliwosci
    const count = document.querySelectorAll(".histogram-element");
    for (let i in elements) {
      his[elements[i].innerText]++;
      this.tl
        .to(this.trojkat[i], { duration: 1, opacity: 1 })
        .to(count[elements[i].innerText], {
          duration: 1,
          backgroundColor: "yellow",
        })
        .set(count[elements[i].innerText], {
          innerText: "+=1",
        })
        .to(count[elements[i].innerText], {
          duration: 1,
          backgroundColor: "#209781",
        })
        .to(this.trojkat[i], { duration: 1, opacity: 0 });
    }

    for (let i = 1; i < his.length; ++i) {
      his[i] += his[i - 1];
      this.tl
        .to(count[i], { duration: 1, backgroundColor: "yellow" })
        .set(count[i], { innerText: "+=" + his[i - 1] })
        .to(count[i], {
          duration: 1,
          backgroundColor: "#209781",
        });
    }

    let out = new Array(elements.length);
    const output = document.querySelectorAll(".output-element");
    this.tl
      .to(document.querySelector(".output-container"), {
        duration: 1,
        opacity: 1,
      })
      .to(
        output,
        {
          duration: 1,
          opacity: 1,
        },
        "-=1"
      );
    for (let i = elements.length - 1; i >= 0; --i) {
      out[--his[elements[i].innerText]] = elements[i].innerText;
      this.tl
        .to(output[his[elements[i].innerText]], {
          duration: 1,
          backgroundColor: "yellow",
        })
        .set(output[his[elements[i].innerText]], {
          innerText: elements[i].innerText,
        })
        .to(output[his[elements[i].innerText]], {
          duration: 1,
          backgroundColor: "#209781",
        });
    }
  };

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

  bubbleSortAnimation = () => {
    //sortowanie rosnąco, działa animacja, sortuje z flagą oraz pomijając juz wybrane minimalne elementy
    this.setState({ losujDisabled: true, sortujDisabled: true });
    let elements = [];
    let x = [];
    for (let i = 0; i < this.tab.length; i++) {
      elements[i] = this.tab[i];
      x[i] = 0;
    }
    // let swapped;
    let n = elements.length;
    do {
      // swapped = false;
      for (let i = 0; i < n - 1; i++) {
        this.tl
          .to(this.trojkat[i + 1], 1, { opacity: 1 })
          .to(this.trojkat[i], 1, { opacity: 1 }, "-=1")
          .to(this.trojkat[i + 1], 1, { opacity: 0 })
          .to(this.trojkat[i], 1, { opacity: 0 }, "-=1");
        if (elements[i].innerText > elements[i + 1].innerText) {
          this.tl
            .to(elements[i + 1], 1, { x: (x[i + 1] += -67), y: -67 })
            .to(elements[i], 1, { x: (x[i] += 67), y: 67 }, "-=1")
            .to(elements[i + 1], 1, { x: (x[i + 1] += -67), y: 0 })
            .to(elements[i], 1, { x: (x[i] += 67), y: 0 }, "-=1");

          const temp = elements[i];
          elements[i] = elements[i + 1];
          elements[i + 1] = temp;

          const xx = x[i];
          x[i] = x[i + 1];
          x[i + 1] = xx;

          // swapped = true;
        }
      }
      n--;
    } while (n > 1);
    //this.setState({ losujDisabled: false, sortujDisabled: false });
    window.setTimeout(() => {
      this.setState({
        losujDisabled: false,
        sortujDisabled: false,
      });
    }, this.tl.totalDuration() * 1000);
  };

  randomValues = () => {
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
  };
}

const print = (arr) => {
  let str = "[ ";
  arr.forEach((e) => (str += e + " "));
  console.log(`${str} ]`);
};
