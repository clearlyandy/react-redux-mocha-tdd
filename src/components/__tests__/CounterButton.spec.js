'use strict';

import mocha from 'mocha';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CounterButton from '../CounterButton';

const mockStore = configureMockStore()
let getState = {
  MathReducer: {
    count: 0
  }
};
let store = mockStore(getState);

// JSDom provides the virtual browser environment where headless tests run.
const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;
global.Element = window.Element;

describe('CounterButton', () => {
  it('runs tests', () => {
    expect(true).to.be.ok;
  });
  it('renders CounterButton component', () => {
    ReactDOM.render(
      <Provider store={store}>
        <CounterButton />
      </Provider>,
      document.getElementById('app')
    );
  });
  it('verifies CounterButton contains zero count', () => {
    expect(document.getElementById('counter-button').textContent).to.equal('This button has been clicked 0 times');
  });
  it('CounterButton fires action on click', () => {
    TestUtils.Simulate.click(document.getElementById('counter-button'));
    expect(store.getActions()[0].type).to.equal('MATH_REDUCER_ADD');
  });
  it('verifies CounterButton count reflects state', () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    
    let getState = {
      MathReducer: {
        count: 202
      }
    };
    let store = mockStore(getState);

    ReactDOM.render(
      <Provider store={store}>
        <CounterButton />
      </Provider>,
      document.getElementById('app')
    );

    expect(document.getElementById('counter-button').textContent).to.equal('This button has been clicked 202 times');
  });
})
