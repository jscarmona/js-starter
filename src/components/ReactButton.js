import React, { Component } from 'react';

class ReactButton extends Component {
  constructor(props) {
    super(props);

    // We need to bind the instance of this to our method
    // This is not a React thing, its a JavaScript thing.
    // Context is lost when inside other functions.
    this.onClick = this.onClick.bind(this);
  }

  state = {
    isActive: false,
  }

  onClick() {
    this.setState({
      isActive: !this.state.isActive, // inverse the state
    })
  }

  render() {
    let className = 'button';

    if (this.state.isActive) {
      className = `${className} success`;
    }

    return (
      <div>
        <button className={className} type="button" onClick={this.onClick}>
          React Click Me
        </button>
        {
          /* Can control the entire component based on state with minimal effort */
          this.state.isActive &&
            <h3>Now you see me!</h3>
        }
      </div>
    );
  }
}

export default ReactButton;
