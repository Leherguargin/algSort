import React from "react";
import Slider from "@material-ui/core/Slider";
import { gsap, TweenLite } from "gsap";

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
      <div>
        <div className="col-3">
          <Slider
            value={this.sliderValue}
            onChange={this.handleChange}
            aria-labelledby="continuous-slider"
          />
        </div>
        <MyComponent />
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, { x: 100, y: 100 });
  }

  render() {
    return <div ref={div => (this.myElement = div)} />;
  }
}
