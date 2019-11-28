import React from "react";
import InputFileButton from "./InputFileButton";
import { Col, Row, Button, Form, Jumbotron } from "react-bootstrap";

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: false,
      quick: false,
      merge: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.obslugaDanychWykresu = this.obslugaDanychWykresu.bind(this);
    this.obslugaExcela = this.obslugaExcela.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  obslugaDanychWykresu(e) {
    this.props.danePowrotne(e, this.state);
  }

  obslugaExcela(e) {
    this.props.danePowrotne(e, this.state);
  }

  render() {
    return (
      <div className="m-3">
        <Form className="m-3">
          <legend className="text-white"> Algorytmy </legend>
          {["checkbox"].map(type => (
            <div key={`inline-${type}`} className="m-3">
              <Form.Check
                label="merge sort"
                type={type}
                name="merge"
                className="text-white m-1"
                onChange={this.handleInputChange}
                checked={this.state.merge}
              />
              <Form.Check
                label="bubble sort"
                type={type}
                name="bubble"
                className="text-white m-1"
                onChange={this.handleInputChange}
                checked={this.state.bubble}
              />
              <Form.Check
                label="quick sort"
                type={type}
                name="quick"
                className="text-white m-1"
                onChange={this.handleInputChange}
                checked={this.state.quick}
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
          <legend className="text-white">Z pliku excel</legend>
          <InputFileButton
            buttonClass="outline-info"
            obslugaExcela={this.obslugaExcela}
          />
        </div>
      </div>
    );
  }
}

export default Navi;
