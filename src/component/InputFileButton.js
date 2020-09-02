import React from "react";
import { Button } from "react-bootstrap";
import XLSX from "xlsx";

export default class InputFileButton extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleButtonClick(e) {
    this.fileUpload.current.click();
  }

  handleInputFileChange(files) {
    var reader = new FileReader();
    var xd = [];
    reader.onload = function () {
      var fileData = reader.result;
      var wb = XLSX.read(fileData, { type: "binary" });
      wb.SheetNames.forEach(function (sheetName) {
        var rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
        var jsonObj = JSON.stringify(rowObj);
        xd = jsonObj;
      });
    };
    reader.readAsBinaryString(files[0]);

    this.props.funkcjaObslugujacaPliki(xd);
  }

  render() {
    return (
      <div>
        <Button
          variant={this.props.buttonClass}
          onClick={this.handleButtonClick}
        >
          Dodaj plik{" "}
        </Button>{" "}
        <input
          type="file"
          name="my_file"
          //accept="plik/xlsx" //to niestety chyba nie działą...
          onChange={(e) => this.handleInputFileChange(e.target.files)}
          ref={this.fileUpload}
          style={{ visibility: "hidden", display: "none" }}
        />{" "}
      </div>
    );
  }
}
