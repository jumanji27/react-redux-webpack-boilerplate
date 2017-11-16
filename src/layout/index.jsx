import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';

import Entity from '../pages/entity';

import entityReducers from '../pages/entity/reducers';

import './index.css';


const reducers =
  combineReducers({
    entity: entityReducers,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =
  createStore(
    reducers,
    composeEnhancers(applyMiddleware()),
  );


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Entity} />
      </div>
    </Router>
  </Provider>,
  $('.js_root')[0],
);
