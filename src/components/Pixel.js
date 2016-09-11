import React, { Component } from 'react';

class Pixel extends Component {
  render() {
    return(
      <div
        style={
          {
            backgroundColor: this.props.color,
            border: "1px solid black",
            // width: "35px",
            // height: "35px",
            // display: "inline-block"
          }
        }
        className="pixel"
      >
      </div>
    )
  }
}

export default Pixel;