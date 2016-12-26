import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMovie, clearSelectedMovie } from '../actions/movies';
import * as commonSelectors from '../reducers/common';
import * as moviesSelectors from '../reducers/movies';
import Movies from '../components/Movies';
import MovieDetail from '../components/MovieDetail';
import Spinner from '../components/Spinner';

class App extends Component {
  componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  fetchMovies = (e) => {
    const value = this.searchInput.value;

    if (e.keyCode === 13 && value) {
      this.props.fetchMovies(value, 1)
        .then((data) => { this.searchInput.value = ''; });
    }
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
    const {
      isLoading,
      movies,
      searchTerm,
      totalMovies,
      selectedMovie,
    } = this.props;

    return (
      <div>
        {isLoading && <Spinner />}

        <section className="section hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Movies</h1>
              <h2 className="subtitle is-4">Search for any movie in the imdb database</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="control has-icon has-addons">
              <input
                className="input is-expanded is-large is-info"
                type="text"
                ref={(ref) => { this.searchInput = ref; }}
                onKeyUp={this.fetchMovies}
                placeholder="Search for a movie"
              />
              <i className="fa fa-search"></i>
            </div>
          </div>
        </section>

        {
          movies.length > 0 &&
            <Movies
              find={this.fetchMovie}
              movies={movies}
              term={searchTerm}
              total={totalMovies}
              nextPage={this.fetchNextPage}
            />
        }

        {
          selectedMovie &&
            <MovieDetail
              movie={selectedMovie}
              clear={this.clearSelected}
            />
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

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (searchTerm, page) => dispatch(fetchMovies(searchTerm, page)),
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  clearSelectedMovie: () => dispatch(clearSelectedMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
