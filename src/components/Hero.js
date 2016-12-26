import React from 'react';

const Hero = ({ title, subtitle }) => (
  <section className="section hero is-info">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">{title}</h1>
        {
          subtitle &&
            <h2 className="subtitle is-4">{subtitle}</h2>
        }
      </div>
    </div>
  </section>
);

export default Hero;
