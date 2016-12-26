import React, { Component } from 'react';
import Section from './Section';

class MoviesSearchBox extends Component {
  getValue() {
    return this.searchInput ? this.searchInput.value : null;
  }

  clearValue() {
    this.searchInput.value = '';
  }

  focus() {
    this.searchInput.focus();
  }

  render() {
    const { search } = this.props;

    return (
      <Section>
        <div className="control has-icon has-addons">
          <input
            className="input is-expanded is-large is-info"
            type="search"
            ref={(ref) => { this.searchInput = ref; }}
            onKeyUp={search}
            placeholder="Search for a movie"
          />
          <i className="fa fa-search"></i>
        </div>
      </Section>
    );
  }
}

export default MoviesSearchBox;
