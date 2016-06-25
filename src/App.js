import React, { Component } from 'react';  
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';
import CounterButton from './components/CounterButton';

import createStore from './redux/Create';
const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterButton />
      </Provider>
    );
  }
}
