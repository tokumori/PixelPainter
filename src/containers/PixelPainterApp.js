import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Pixel, Canvas } from '../components';
// import { setColor, selectColor, clearCanvas } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class PixelPainterApp extends Component {
  render() {
    return (
      <div>
        <Canvas colors={[['red', 'blue'], ['green', 'yellow']]} />
      </div>
    )
  }
}

export default PixelPainterApp;