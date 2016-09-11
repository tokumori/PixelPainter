import React, { Component } from 'react';
import Pixel from './Pixel';

let currentColor;
class Palette extends Component {
  constructor (props) {
    super(props);
    this.setColor = this.setColor.bind(this);
  }
  setColor (color, index) {
    console.log(currentColor);
    if (color !== currentColor) {
      currentColor = 'blue';
      console.log(currentColor);
    }
  }
  render() {
    const colorsArray = this.props.colors.map((color, index) => {
      return (
        <Pixel
          key={index}
          color={color}
          handleClick= {() => this.setColor(color, index)}
        />
      )
    })
    return (
      <div className="palette"
        style={
          {
            display: "inline-block",
            width: "15%",
            "margin-right": "40px"
          }
        }
      >
        {colorsArray}
      </div>
    )
  }
}

export default Palette;