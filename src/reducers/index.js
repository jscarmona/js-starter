import { combineReducers } from 'redux';
import common from './common';
import movies from './movies';

export default combineReducers({
  common,
  movies,
});
