import React from "react";
import Wykres from "./Wykres";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import XLSX from "xlsx";
import InputFileButton from "../InputFileButton";

export default class Wykresy extends React.Component {
  backendAdress = "http://localhost:8080/sort";
  //backendAdress = 'https://inzmlback.herokuapp.com/sort';

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      wyswietlaneAlgorytmy: [false, false, false, false, false, false],
      dostepneAlgorytmy: [
        "quickSort",
        "selectionSort",
        "bubbleSort",
        "insertionSort",
        "mergeSort",
        "countingSort",
        "heapSort",
      ],
      odIlu: 0,
      doIlu: 7001,
      coIle: 1000,
      daneDoWykresu: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const alg = this.state.wyswietlaneAlgorytmy;
    alg[event.target.name] = !alg[event.target.name];
    this.setState({
      wyswietlaneAlgorytmy: alg,
    });
  }

  handleSubmit(event) {
    this.componentDidMount();
    event.preventDefault();
  }

  obslugaExcela(plik) {
    if (
      plik.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      var workbook = XLSX.read(plik.data, { type: "binary" });
      var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
      var dataXLSX = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 }); //wynik jest tablicą liczb.
      plik["dataXLSX"] = dataXLSX; //nie działa, nie wiem czemu
    }

    this.props.danePowrotne(plik, this.state);
  }

  componentDidMount() {
    fetch(this.backendAdress, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        algorytmy: this.state.dostepneAlgorytmy.filter((value, index) => {
          return this.state.wyswietlaneAlgorytmy[index];
        }),
        odIlu: this.state.odIlu,
        doIlu: this.state.doIlu,
        coIle: this.state.coIle,
        jakieDane: "losowe",
      }),
    })
      .then((res) => res.json())
      .then(
        (resoult) => {
          this.setState({
            daneDoWykresu: resoult,
            isLoaded: true,
          });
        },
        (error) => {
          console.error("Był problem z fechem:", error);
          this.setState({
            isLoaded: true, //todo a moze tu jednak false??
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, error } = this.state;
    if (error) {
      return <div> Błąd: {error.message} </div>;
    } else {
      let wykresik = (
        <section className="col-md-10">
          <div style={{ color: "white" }}> Ładowanie... </div>
        </section>
      );
      if (
        isLoaded &&
        this.state.wyswietlaneAlgorytmy.find((element) => {
          return element;
        }) !== undefined
      ) {
        wykresik = (
          <section className="col-md-10">
            <Wykres
              szerokoscWykresu={(8 / 12) * window.innerWidth}
              wysokoscWykresu={(8 / 12) * window.innerHeight}
              dane={this.state.daneDoWykresu}
              jakieAlgorytmy={this.state.dostepneAlgorytmy}
              wyswietlaneAlgorytmy={this.state.wyswietlaneAlgorytmy}
            />
          </section>
        );
      }

      return (
        <div>
          <div className="row">
            <nav className="col-md-2">
              <div className="m-3">
                <Form className="m-3">
                  <legend className="text-white"> Algorytmy </legend>
                  {this.state.dostepneAlgorytmy.map((element, index, arr) => (
                    <div key={index} className="m-3">
                      <Form.Check
                        label={element}
                        type="checkbox"
                        name={index}
                        className="text-white m-1"
                        onChange={this.handleInputChange}
                        value={this.state.wyswietlaneAlgorytmy[index]}
                      />{" "}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline-info"
                    onClick={this.handleSubmit}
                  >
                    Zastosuj
                  </Button>
                </Form>
                <div className="m-3">
                  <legend className="text-white"> Z pliku excel </legend>
                  <InputFileButton
                    buttonClass="outline-info"
                    funkcjaObslugujacaPliki={this.obslugaExcela}
                  />
                </div>
              </div>
            </nav>
            {wykresik}
            <footer className="col-md-12" />
          </div>
        </div>
      );
    }
  }
}
