import React, { Component } from 'react';
import Pixel from './Pixel';

class Canvas extends Component {
  render() {
    const colorsArray = this.props.colors.map((rows, index) => {
      return (
        <div key={index}>
          {rows.map((columns, index) => {
            return (
              <Pixel
                key={index}
                color={columns}
              />
            )
          })}
        </div>
      )
    })
    return (
      <div>
        {colorsArray}
      </div>
    )
  }
}

export default Canvas;