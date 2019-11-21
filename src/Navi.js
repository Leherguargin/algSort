import React from "react";
import Form from "react-bootstrap/Form";
import InputFileButton from "./InputFileButton";
import Button from "react-bootstrap/Button";

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: false,
      quick: false,
      merge: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChangeLokal = this.handleInputChangeLokal.bind(this);
    //this.polaczZapi = this.polaczZapi.bind(this);
  }

  // polaczZapi() {
  //   //const value = this.refs.number.value;
  //   console.log(value);
  //   fetch(`http://localhost:3001/a`).then(res => console.log(res));
  // }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    alert(
      `zasubminowano bubble: ${this.state.bubble} quick: ${this.state.quick} merge: ${this.state.merge}`
    );
  }

  handleInputChangeLokal(e) {
    alert("zmień wykres");
  }

  render() {
    return (
      <div className="m-3">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className="text-white"> Algorytmy </legend>
            <div className="mb-1">
              <div>
                <label className="text-white m-1">
                  <input
                    name="merge"
                    type="checkbox"
                    checked={this.state.merge}
                    onChange={this.handleInputChange}
                  />
                  merge sort
                </label>
              </div>
              <div>
                <label className="text-white m-1">
                  <input
                    name="bubble"
                    type="checkbox"
                    checked={this.state.bubble}
                    onChange={this.handleInputChange}
                  />
                  bubble sort
                </label>
              </div>
              <div>
                <label className="text-white m-1">
                  <input
                    name="quick"
                    type="checkbox"
                    checked={this.state.quick}
                    onChange={this.handleInputChange}
                  />
                  quick sort
                </label>
              </div>
            </div>
          </fieldset>
          <Button type="submit" variant="outline-info">
            Zastosuj
          </Button>
        </form>

        <hr />
        <Form>
          <legend className="text-white"> Algorytmy </legend>
          {["checkbox"].map(type => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                // inline
                label="merge sort"
                type={type}
                id={`inline-${type}-1`}
                className="text-white m-1"
                onChange={this.handleInputChangeLokal}
              />
              <Form.Check
                //inline
                label="bubble sort"
                type={type}
                id={`inline-${type}-2`}
                className="text-white m-1"
                onChange={this.handleInputChangeLokal}
              />
              <Form.Check
                //inline
                disabled
                label="stupid sort (disabled)"
                type={type}
                id={`inline-${type}-3`}
                className="text-white m-1"
                onChange={this.handleInputChangeLokal}
              />
            </div>
          ))}
        </Form>
        <hr />
        <hr />

        <InputFileButton buttonClass="outline-info" />
      </div>
    );
  }
}

export default Navi;
