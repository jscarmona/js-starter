import React from 'react';
import { render } from 'react-dom';
import JQueryButton from './components/JQueryButton';
import ReactButton from './components/ReactButton';

render(<JQueryButton />, document.getElementById('jquery-button'));
render(<ReactButton />, document.getElementById('react-button'));