import React from "react";
import Slider from "@material-ui/core/Slider";

export default class Wykres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //this.setState({sliderValue: EventTarget.arguments});//napraw obsługę slajderka
  }

  render() {
    return (
      <div className="col-3">
        <Slider
          value={this.sliderValue}
          onChange={this.handleChange}
          aria-labelledby="continuous-slider"
        />
      </div>
    );
  }
}
