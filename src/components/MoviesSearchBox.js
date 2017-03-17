import React, { Component } from 'react';
import Section from './Section';

class MoviesSearchBox extends Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  search = (e) => {
    const { value } = this.searchInput;

    if (e.keyCode === 13 && value) {
      this.props.onSearch(value)
        .then(() => { this.searchInput.value = ''; });
    }
  }

  render() {
    return (
      <Section>
        <div className="control has-icon has-addons">
          <input
            className="input is-expanded is-large is-info"
            type="search"
            ref={(ref) => { this.searchInput = ref; }}
            onKeyUp={this.search}
            placeholder="Search for a movie"
          />
          <i className="fa fa-search"></i>
        </div>
      </Section>
    );
  }
}

export default MoviesSearchBox;
