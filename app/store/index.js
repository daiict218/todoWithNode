import {createStore} from 'redux';
import reducer from '../reducer';

let defaultState = {
  todos: []
};

exports.configureStore = (initialState = defaultState) => {
  return createStore(reducer, initialState);
};
