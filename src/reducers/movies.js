import { Map } from 'immutable';
import {
  MOVIES_FETCH_ALL_REQUEST,
  MOVIES_FETCH_ALL_SUCCESS,
  MOVIES_FETCH_ALL_ERROR,
  MOVIES_FETCH_ONE_REQUEST,
  MOVIES_FETCH_ONE_SUCCESS,
  MOVIES_FETCH_ONE_ERROR,
  CLEAR_SELECTED_MOVIE,
} from '../constants';

const initialState = Map({
  results: [],
  total: 0,
  term: null,
  selected: null,
  page: 1,
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_FETCH_ALL_REQUEST:
      return state
        .set('results', payload.params.page === 1 ? [] : state.get('results'))
        .set('page', payload.params.page)
        .set('term', payload.params.s);

    case MOVIES_FETCH_ALL_SUCCESS:
      return state
        .set('results', payload.data.Search ? state.get('results').concat(payload.data.Search) : [])
        .set('total', payload.data.totalResults ? parseInt(payload.data.totalResults, 10) : 0);

    case MOVIES_FETCH_ONE_REQUEST:
    case CLEAR_SELECTED_MOVIE:
      return state.set('selected', null);

    case MOVIES_FETCH_ONE_SUCCESS:
      return state.set('selected', payload.data);

    case MOVIES_FETCH_ALL_ERROR:
    case MOVIES_FETCH_ONE_ERROR:
      return initialState;

    default:
      return state
  }
};

export const getMovies = (state) => state.movies.get('results');
export const getTerm = (state) => state.movies.get('term');
export const getPage = (state) => state.movies.get('page');
export const getTotal = (state) => state.movies.get('total');
export const getSelected = (state) => state.movies.get('selected');
