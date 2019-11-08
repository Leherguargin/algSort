import React from "react";

class Navi extends React.Component {
  state = {
    text: "dane pobrane z fieldseta ",
    dane: 3
  };

  polaczZapi() {
    const value = this.refs.number.value;
    console.log(value);
    fetch(`http://localhost:3001/a`).then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <form onSubmit="polaczZapi()" ref="number">
          <fieldset>
            <legend> Algorytmy </legend>
            <div class="zawartosc">
              <label>
                <input type="checkbox" ref="algorytm"></input>
                merge sort
              </label>
            </div>
            <div class="zawartosc">
              <label>
                <input type="checkbox" ref="algorytm"></input>
                bubble sort
              </label>
            </div>
            <div class="zawartosc">
              <label>
                <input type="checkbox" ref="algorytm"></input>
                quick sort
              </label>
            </div>
          </fieldset>
          <button type="submit"> Połącz </button>
        </form>
      </div>
    );
  }
}

export default Navi;
