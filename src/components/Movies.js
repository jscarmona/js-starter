import React from 'react';

const Movies = ({ movies, term, find, isLoading, total, nextPage }) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="content">
          <p className="has-text-right">There are {total} movies for <strong>{term}</strong></p>
        </div>
        <div className="columns is-multiline is-mobile">
          {
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="column is-6-mobile is-2-desktop is-3-tablet"
                onClick={() => find(movie.imdbID)}
                style={{ cursor: 'pointer' }}
              >
                {
                  movie.Poster !== 'N/A' && (
                    <figure className="image" style={{ marginBottom: '1rem' }}>
                      <img src={movie.Poster} />
                    </figure>
                  )
                }
                <div className="content">
                  <h2 className="title is-5">{movie.Title}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>

    {
      movies.length < total && (
        <section className="section">
          <div className="container">
            <button className="button is-info is-fullwidth is-medium" onClick={nextPage}>
              Load More
            </button>
          </div>
        </section>
      )
    }
  </div>
);

export default Movies;
