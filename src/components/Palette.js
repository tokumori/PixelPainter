import React, { Component } from 'react';
import Pixel from './Pixel';

class Palette extends Component {
  render() {
    const colorsArray = this.props.colors.map((rows, index) => {
      return (
        <Pixel
          key={index}
          color={rows}
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