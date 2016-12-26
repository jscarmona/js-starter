import { Map } from 'immutable';
import {
  MOVIES_FETCH_ALL_REQUEST,
  MOVIES_FETCH_ONE_REQUEST,
} from '../constants';

const initialState = Map({
  isLoading: false,
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_FETCH_ALL_REQUEST:
    case MOVIES_FETCH_ONE_REQUEST:
      return state.set('isLoading', true);

    default:
      return state.set('isLoading', false);
  }
}

export const getIsLoading = (state) => state.common.get('isLoading');
