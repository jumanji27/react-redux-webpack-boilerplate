import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'

import Home from './pages/home'
import homeReducers from './pages/home/reducers.js'

import './index.scss'


const reducers =
  combineReducers({
    home: homeReducers
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =
  createStore(
    reducers,
    composeEnhancers(
      applyMiddleware()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementsByClassName('js-root')[0]
);