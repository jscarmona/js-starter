import React from 'react';

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 1001,
};

const elementStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  zIndex: 1002,
  maxWidth: '600px',
  width: '90%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
}

const closeBtnStyle = {
  cursor: 'pointer',
  position: 'absolute',
  top: '-2rem',
  right: 0,
  color: 'white',
};

const MovieDetail = ({ movie, clear }) => (
  <div style={containerStyle}>
    <div style={elementStyle}>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-4">
              <figure className="image" style={{ marginBottom: '1rem' }}>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://placehold.it/300x466?text=Coming+Soon'} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h1 className="title is-3">{movie.Title}</h1>
                {
                  movie.Plot !== 'N/A' &&
                    <p>{movie.Plot}</p>
                }
                <p>
                  <strong>Released:</strong> {movie.Released}<br />
                  <strong>Actors:</strong> {movie.Actors}<br />
                  <strong>Director:</strong> {movie.Director}<br />
                  <strong>Genre:</strong> {movie.Genre}<br />
                  <strong>Rated:</strong> {movie.Rated}<br />
                  <strong>Duration:</strong> {movie.Runtime}<br />
                  <strong>Rating:</strong> {movie.imdbRating}/10 ({movie.imdbVotes})
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span style={closeBtnStyle} onClick={clear}>
        <i className="fa fa-remove"></i>
      </span>
    </div>
    <div style={overlayStyle} onClick={clear} />
  </div>
);

export default MovieDetail;
