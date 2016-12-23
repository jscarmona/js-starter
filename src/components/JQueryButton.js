import React, { Component } from 'react';
import $ from 'jquery';

class JQueryButton extends Component {
  constructor(props) {
    super(props);

    // We need to bind the instance of this to our method
    // This is not a React thing, its a JavaScript thing.
    // Context is lost when inside other functions.
    this.onClick = this.onClick.bind(this);
  }

  // Runs only 1 time when the component is mounted onto the screen
  componentDidMount() {
    this.$button = $('.js-button');
    this.$message = $('.js-message');

    this.$button.on('click', this.onClick);
  }

  componentWillUnmount() {
    // Clean up after ourselves to not leak event listeners
    this.$button.off('click', this.onClick);
  }

  onClick() {
    this.$button.toggleClass('success');
    this.$message.toggle();
    this.props.toggle();
  }

  render() {
    return (
      <div>
        <button className="js-button button" type="button">
          jQuery Click Me
        </button>
        <h3 className="js-message" style={{ display: 'none' }}>Now you see me!</h3>
        {
          this.props.isActive && this.props.isSomeoneElseActive &&
            <h3>React is active too!</h3>
        }
      </div>
    );
  }
}

export default JQueryButton;
