import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers';
import { App } from './containers';

ReactDOM.render(
  <Provider store={store}>
    <PixelPainterApp/>
  </Provider>,
  document.getElementById('app')
);