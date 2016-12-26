import React from 'react';

const Section = ({ children }) => (
  <section className="section">
    <div className="container">
      {children}
    </div>
  </section>
);

export default Section;
