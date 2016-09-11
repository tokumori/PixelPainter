import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Palette, Canvas } from '../components';
import { selectColor } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class PixelPainterApp extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Palette
          colors={this.props.palette.colors}
          select={this.props.palette.selected}
        />
        <Canvas colors={[['red', 'blue'], ['green', 'yellow']]} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(PixelPainterApp);