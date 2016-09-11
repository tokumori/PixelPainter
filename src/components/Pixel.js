import React, { Component } from 'react';

class Pixel extends Component {
  render() {
    return(
      <div
        style={
          {
            backgroundColor: this.props.color
          }
        }
        className="pixel"
        onClick={this.props.handleClick}
      >
      </div>
    )
  }
}

export default Pixel;