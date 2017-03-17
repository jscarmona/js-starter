import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMovie, clearSelectedMovie } from '../actions/movies';
import * as commonSelectors from '../reducers/common';
import * as moviesSelectors from '../reducers/movies';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import MoviesSearchBox from '../components/MoviesSearchBox';
import MovieDetailModal from '../components/MovieDetailModal';
import Spinner from '../components/Spinner';

class App extends Component {
  fetchMovies = (value) => {
    return this.props.fetchMovies(value, 1);
  }

  fetchNextPage = () => {
    const { page, searchTerm } = this.props;

    this.props.fetchMovies(searchTerm, page + 1);
  }

  fetchMovie = (id) => {
    this.props.fetchMovie(id);
  }

  clearSelected = () => {
    this.props.clearSelectedMovie();
  }

  render() {
    const { isLoading, movies, searchTerm, totalMovies, selectedMovie } = this.props;

    return (
      <div>
        {
          isLoading && <Spinner />
        }
        <MoviesSearchBox onSearch={this.fetchMovies} />
        <Hero title="Movies" subtitle="Search for any movie in the imdb database" />
        <Movies movies={movies} term={searchTerm} total={totalMovies} find={this.fetchMovie} nextPage={this.fetchNextPage} />
        {
          selectedMovie && (
            <MovieDetailModal movie={selectedMovie} clear={this.clearSelected} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: commonSelectors.getIsLoading(state),
  movies: moviesSelectors.getMovies(state),
  page: moviesSelectors.getPage(state),
  searchTerm: moviesSelectors.getTerm(state),
  totalMovies: moviesSelectors.getTotal(state),
  selectedMovie: moviesSelectors.getSelected(state),
});

const mapDispatchToProps = {
  fetchMovies,
  fetchMovie,
  clearSelectedMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
