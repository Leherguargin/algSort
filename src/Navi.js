import React from "react";

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend> Algorytmy </legend>
            <div class="zawartosc">
              <label>
                <input
                  name="merge"
                  type="checkbox"
                  checked={this.state.merge}
                  onChange={this.handleInputChange}
                />
                merge sort
              </label>
            </div>
            <div class="zawartosc">
              <label>
                <input
                  name="bubble"
                  type="checkbox"
                  checked={this.state.bubble}
                  onChange={this.handleInputChange}
                />
                bubble sort
              </label>
            </div>
            <div class="zawartosc">
              <label>
                <input
                  name="quick"
                  type="checkbox"
                  checked={this.state.quick}
                  onChange={this.handleInputChange}
                />
                quick sort
              </label>
            </div>
          </fieldset>
          <button type="submit"> Zastosuj </button>
        </form>
      </div>
    );
  }
}

export default Navi;
