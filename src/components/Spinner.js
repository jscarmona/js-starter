import React from 'react';

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 1000,
};

const elementStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const Spinner = () => (
  <div style={containerStyle}>
    <div className="icon is-large" style={elementStyle}>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    </div>
  </div>
);

export default Spinner;
