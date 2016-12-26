import React from 'react';
import moment from 'moment';
import Modal from './Modal';
import Poster from './Poster';

const parseDate = (date) => moment(date, 'D MMM YYYY').format('MMM D, YYYY');

const MovieDetailModal = ({ movie, clear }) => (
  <Modal close={clear}>
    <div className="columns is-mobile">
      <div className="column is-4">
        <Poster src={movie.Poster} />
      </div>
      <div className="column">
        <h1 className="title is-3">{movie.Title}</h1>
        {
          movie.Plot !== 'N/A' && (
            <div className="content">
              <p>{movie.Plot}</p>
            </div>
          )
        }
        <ul>
          <li><strong>Released</strong> {parseDate(movie.Released)}</li>
          <li><strong>Actors</strong> {movie.Actors}</li>
          <li><strong>Director</strong> {movie.Director}</li>
          <li><strong>Genre</strong> {movie.Genre}</li>
          <li><strong>Rated</strong> {movie.Rated}</li>
          <li><strong>Duration</strong> {movie.Runtime}</li>
          <li><strong>Rating</strong> {movie.imdbRating}/10 ({movie.imdbVotes})</li>
        </ul>
      </div>
    </div>
  </Modal>
);

export default MovieDetailModal;
