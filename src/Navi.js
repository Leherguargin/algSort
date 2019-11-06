import React from "react";

class Navi extends React.Component {
  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <fieldset>
          <legend> Algorytmy </legend>
          <Alg nazwa={"merge sort"} />
          <Alg nazwa={"bubble sort"} />
          <Alg nazwa={"quick sort"} />
        </fieldset>
        {/* <button type="submit">Add</button> */}
        {/* </form> */}
      </div>
    );
  }
}

class Alg extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      name: ""
    };
  }
  render() {
    return (
      <div class="zawartosc">
        <label>
          <input type="checkbox" name="alg[]"></input>
          {this.props.nazwa}
        </label>
      </div>
    );
  }
}

export default Navi;
