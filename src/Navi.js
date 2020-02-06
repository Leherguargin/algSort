import React from "react";
import InputFileButton from "./InputFileButton";
import { Button, Form } from "react-bootstrap";
import XLSX from "xlsx";

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dostepneAlgorytmy: this.props.dostepneAlgorytmy,
      wyswietlaneAlgorytmy: this.props.wyswietlaneAlgorytmy
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.obslugaDanychWykresu = this.obslugaDanychWykresu.bind(this);
    this.obslugaExcela = this.obslugaExcela.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    //const name = target.name;
    this.setState({ wyswietlaneAlgorytmy: { name: value } });
  }

  obslugaDanychWykresu(e) {
    this.props.danePowrotne(e, this.state);
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

  render() {
    return (
      <div className="m-3">
        <Form className="m-3">
          <legend className="text-white"> Algorytmy </legend>
          {this.props.dostepneAlgorytmy.map((element, index, arr) => (
            <div key={index} className="m-3">
              <Form.Check
                label={element}
                type="checkbox"
                name={index}
                className="text-white m-1"
                onChange={this.handleInputChange}
                checked={this.state.wyswietlaneAlgorytmy[index]} //to tak zadziała? (index)
              />
            </div>
          ))}
          <Button
            type="button"
            variant="outline-info"
            onClick={this.obslugaDanychWykresu}
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
    );
  }
}

export default Navi;
