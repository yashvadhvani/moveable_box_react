import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import middleware from './middlewares/index'
import reducer from './reducers/index'


const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

