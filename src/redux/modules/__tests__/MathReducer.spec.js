'use strict';

import mocha from 'mocha';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as MathReducer from '../MathReducer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let getState = {
  count: 1
};
const store = mockStore(getState);

describe('MathReducer', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('runs tests', () => {
    expect(true).to.be.ok;
  });
  it('creates add action', () => {
    store.dispatch(MathReducer.add());
    expect(store.getActions()[0].type).to.equal('MATH_REDUCER_ADD');
  });
  it('receives add action and increments count', () => {
    getState = MathReducer.default(getState, store.getActions()[0]);
    expect(getState.count).to.equal(2);
  });
  it('receives add action and increments count', () => {
    getState = MathReducer.default(getState, store.getActions()[0]);
    expect(getState.count).to.equal(3);
  });
  it('creates subtract action', () => {
    store.dispatch(MathReducer.subtract());
    expect(store.getActions()[1].type).to.equal('MATH_REDUCER_SUBTRACT');
  });
  it('receives add action and increments count', () => {
    getState = MathReducer.default(getState, store.getActions()[1]);
    expect(getState.count).to.equal(2);
  });
})
