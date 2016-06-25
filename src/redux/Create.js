import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MathReducer from './modules/MathReducer';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : func => func
)(createStore);

export default function() {
  const reducerCombo = combineReducers({
    MathReducer
  });
  const createStoreWithMiddleware = applyMiddleware(thunk)(finalCreateStore);
  return createStoreWithMiddleware(reducerCombo);
}
