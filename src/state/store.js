import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { vehicleReducer } from './vehicles/vehicleReducer';

export default function initializeStore(initialState = {}) {
  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }
  middleware.push(thunk);

  const store = createStore(
    vehicleReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  return store;
}