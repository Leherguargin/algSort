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

  handleChange(e) {}

  render() {
    return (
      <div>
        <Slider
          value={this.sliderValue}
          onChange={this.handleChange}
          aria-labelledby="continuous-slider"
        />
      </div>
    );
  }
}
