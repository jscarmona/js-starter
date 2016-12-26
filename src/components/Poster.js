import React from 'react';

const Poster = ({ src }) => (
  <figure className="image">
    <img src={src !== 'N/A' ? src : 'http://placehold.it/300x466?text=Coming+Soon'} />
  </figure>
);

export default Poster;
