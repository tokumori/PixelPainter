import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store from './reducers';
import PixelPainterApp from './containers/PixelPainterApp';

ReactDOM.render(
  // <Provider store={store}>
  <PixelPainterApp />,
  // </Provider>,
  document.getElementById('app')
);