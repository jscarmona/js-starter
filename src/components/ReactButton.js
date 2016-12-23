import React, { Component } from 'react';

class ReactButton extends Component {
  constructor(props) {
    super(props);

    // We need to bind the instance of this to our method
    // This is not a React thing, its a JavaScript thing.
    // Context is lost when inside other functions.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.toggle();
  }

  render() {
    let className = 'button';

    if (this.props.isActive) {
      className = `${className} success`;
    }

    return (
      <div>
        <button className={className} type="button" onClick={this.onClick}>
          React Click Me
        </button>
        {
          this.props.isActive &&
            <h3>Now you see me!</h3>
        }
        {
          this.props.isActive && this.props.isSomeoneElseActive &&
            <h3>JQuery is active too!</h3>
        }
      </div>
    );
  }
}

export default ReactButton;
