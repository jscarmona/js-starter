import {
  MOVIES_FETCH_ALL_REQUEST,
  MOVIES_FETCH_ALL_SUCCESS,
  MOVIES_FETCH_ALL_ERROR,
  MOVIES_FETCH_ONE_REQUEST,
  MOVIES_FETCH_ONE_SUCCESS,
  MOVIES_FETCH_ONE_ERROR,
  CLEAR_SELECTED_MOVIE,
} from '../constants';

const API_URL = 'http://www.omdbapi.com';

export const clearSelectedMovie = () => ({
  type: CLEAR_SELECTED_MOVIE,
});

export const fetchMovies = (searchTerm, page) => (dispatch) => (
  dispatch({
    type: [
      MOVIES_FETCH_ALL_REQUEST,
      MOVIES_FETCH_ALL_SUCCESS,
      MOVIES_FETCH_ALL_ERROR,
    ],
    payload: {
      url: API_URL,
      params: {
        s: searchTerm,
        type: 'movie',
        page,
      },
    },
  })
);

export const fetchMovie = (imdbId) => (dispatch) => (
  dispatch({
    type: [
      MOVIES_FETCH_ONE_REQUEST,
      MOVIES_FETCH_ONE_SUCCESS,
      MOVIES_FETCH_ONE_ERROR,
    ],
    payload: {
      url: API_URL,
      params: {
        i: imdbId,
      },
    },
  })
)