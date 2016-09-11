import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Pixel, Canvas, Pallet } from '../components';
// import { setColor, selectColor, clearCanvas } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class PixelPainterApp extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        Sup Dawg!
      </div>
    )
  }
}

export default PixelPainterApp;