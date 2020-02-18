

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import combinedReducers from 'reducers';
import logger from 'redux-logger';

const middlewares = [thunkMiddleware, logger];
const store = createStore(combinedReducers, applyMiddleware(...middlewares));
export default store;