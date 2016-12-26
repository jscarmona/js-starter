import React from 'react';
import Movie from './Movie';
import Section from './Section';

const Movies = ({ movies, term, find, isLoading, total, nextPage }) => {
  if (!term) {
    return null;
  }

  if (!movies.length) {
    return (
      <Section>
        <div className="content">
          <h3 className="title is-5">There are no movies for <strong>{term}</strong></h3>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="block">
        <div className="content">
          <p>Showing {movies.length} of {total} movies for <strong>{term}</strong></p>
        </div>
        <div className="columns is-multiline is-mobile">
          {
            movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} selectMovie={find} />
            ))
          }
        </div>
      </div>
      {
        movies.length < total && (
          <button className="button is-info is-fullwidth is-medium" onClick={nextPage}>
            Load More Movies
          </button>
        )
      }
    </Section>
  );
};

export default Movies;
