import { combineReducers, compose } from 'redux';

import { default as canvasReducer } from './canvas';
import { default as paletteReducer } from './palette';

const rootReducer = combineReducers({
  canvas: canvasReducer,
  palette: paletteReducer
})

const finalCreateStore = compose(
  (window.devToolsExtension)
  ? window.devToolsExtension
  : (x) => x
);

const store = finalCreateStore(
  rootReducer, {}
);

export default store;