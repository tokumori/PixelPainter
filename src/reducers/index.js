import { combineReducers, compose } from 'redux';

import { default as canvasReducer } from './canvas';
import { default as palletReducer } from './pallet';

const rootReducer = combineReducers({
  canvas: canvasReducer,
  pallet: palletReducer
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