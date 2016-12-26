import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import reducer from './reducers';
import logger from './middlewares/logger';
import api from './middlewares/api';
import App from './containers/App';

const store = createStore(reducer, applyMiddleware(api, thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);