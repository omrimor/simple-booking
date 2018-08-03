import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './rootReducer';
import logMiddleware from './middleware/log';
import debounceMiddleware from './middleware/debounce';
import thunkMiddleware from './middleware/thunk';
import apiMiddleware from './middleware/api';
import multiMiddleware from './middleware/multi';
import { loadState, saveState } from './localStorage';
import Immutable from 'seamless-immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunkMiddleware,
  multiMiddleware,
  debounceMiddleware,
  logMiddleware,
  apiMiddleware
];

// fetching state from localStorage if exist
const persistState = Immutable(loadState());

const store = createStore(
  reducer,
  persistState,
  composeEnhancers(applyMiddleware(...middleware)
));

// We don't want the whole state not to persist the the filters as well
store.subscribe(() => {
  saveState({
    accomodations: store.getState().accomodations
  });
});
export default store;
