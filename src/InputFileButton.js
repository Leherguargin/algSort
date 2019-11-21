import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import XLSX from "xlsx";

export default class InputFileButton extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleButtonClick(e) {
    //dokument.getElementById("my-file").click(); //nie działą zewykły js... ehh
    this.fileUpload.current.click();
  }

  handleInputFileChange(files) {
    var f;

    for (let i = 0, f = files[i]; i != files.length; ++i) {
      var reader = new FileReader();
      var name = f.name;
      reader.onload = function(e) {
        var data = e.target.result;

        var workbook = XLSX.read(data, { type: "binary" });
        console.log(workbook);
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
        console.log(data);
        for (let j = 0; j != data.length; ++j) {
          alert(data[j]);
        }

        /* DO SOMETHING WITH workbook HERE */
      };
      reader.readAsBinaryString(f);
    }
    //alert(`${files[0].name} ${files[0].bytes}`);
  }

  render() {
    return (
      <div>
        <Button
          variant={this.props.buttonClass}
          onClick={this.handleButtonClick}
        >
          Dodaj plik
        </Button>
        <input
          type="file"
          name="my_file"
          accept="plik/xlsx" //to niestety chyba nie działą...
          onChange={e => this.handleInputFileChange(e.target.files)}
          ref={this.fileUpload}
          style={{ visibility: "hidden", display: "none" }}
        />
      </div>
    );
  }
}
