import React from 'react';
import { connect } from 'react-redux';
import JQueryButton from '../components/JQueryButton';
import ReactButton from '../components/ReactButton';
import { toggleJQueryButton, toggleReactButton } from '../actions/button';

const App = ({ isJQueryButtonActive, isReactButtonActive, toggleJQuery, toggleReact }) => (
  <div className="container">
    <JQueryButton isActive={isJQueryButtonActive} toggle={toggleJQuery} isSomeoneElseActive={isReactButtonActive} />
    <ReactButton isActive={isReactButtonActive} toggle={toggleReact} isSomeoneElseActive={isJQueryButtonActive} />
  </div>
);

const mapStateToProps = (state) => ({
  isJQueryButtonActive: state.button.jqueryActive,
  isReactButtonActive: state.button.reactActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleJQuery: () => dispatch(toggleJQueryButton),
  toggleReact: () => dispatch(toggleReactButton),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
