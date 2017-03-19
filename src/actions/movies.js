import {
  MOVIES_FETCH_ALL_REQUEST,
  MOVIES_FETCH_ALL_SUCCESS,
  MOVIES_FETCH_ALL_ERROR,
  MOVIES_FETCH_ONE_REQUEST,
  MOVIES_FETCH_ONE_SUCCESS,
  MOVIES_FETCH_ONE_ERROR,
  CLEAR_SELECTED_MOVIE,
} from '../constants';

/**
 * The imdb api url
 * @property {String}
 */
const API_URL = 'http://www.omdbapi.com';

/**
 * Clears the selected movie
 * @returns {Function} A dispatch function
 */
export const clearSelectedMovie = () => ({
  type: CLEAR_SELECTED_MOVIE,
});

/**
 * Fetch a page of movies for the search term provided.
 * @param {String} searchTerm
 * @param {Number} page
 * @returns {Function} A dispatch function
 */
export const fetchMovies = (searchTerm, page) => ({
  type: [MOVIES_FETCH_ALL_REQUEST, MOVIES_FETCH_ALL_SUCCESS, MOVIES_FETCH_ALL_ERROR],
  payload: {
    url: API_URL,
    params: {
      s: searchTerm,
      type: 'movie',
      page,
    },
  },
});

/**
 * Fetch a single movie
 * @param {String} imdbId
 * @returns {Function} A dispatch function
 */
export const fetchMovie = (imdbId) => ({
  type: [MOVIES_FETCH_ONE_REQUEST, MOVIES_FETCH_ONE_SUCCESS, MOVIES_FETCH_ONE_ERROR],
  payload: {
    url: API_URL,
    params: {
      i: imdbId,
    },
  },
});
