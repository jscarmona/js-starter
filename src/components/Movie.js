import React, { Component } from 'react';
import Poster from './Poster';

class Movie extends Component {
  selectMovie = () => {
    this.props.selectMovie(this.props.movie.imdbID);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="column is-6-mobile is-2-desktop is-3-tablet" onClick={this.selectMovie} style={{ cursor: 'pointer' }}>
        <div className="block">
          <Poster src={movie.Poster} />
        </div>
        <h2 className="title is-5">{movie.Title}</h2>
      </div>
    );
  }
}

export default Movie;
