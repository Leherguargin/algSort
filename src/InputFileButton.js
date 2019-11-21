import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

export default class InputFileButton extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();

    this.zlapKlikniecie = this.zlapKlikniecie.bind(this);
  }

  zlapKlikniecie(e) {
    //dokument.getElementById("my-file").click(); //nie działą zewykły js... ehh
    this.fileUpload.current.click();
  }

  render() {
    return (
      <div>
        <Button variant={this.props.buttonClass} onClick={this.zlapKlikniecie}>
          Dodaj plik
        </Button>
        <input
          type="file"
          name="my_file"
          ref={this.fileUpload}
          style={{ visibility: "hidden", display: "none" }}
        />
      </div>
    );
  }
}
