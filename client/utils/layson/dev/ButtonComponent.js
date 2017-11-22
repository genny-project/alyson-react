import React, { Component } from 'react';
import { string } from 'prop-types';

class Button extends Component {
  static propTypes = {
    text: string
  };

  render() {
    const { text } = this.props;
    return (
      <button className="btn btn-default">{text}</button>
    );
  }
}

export default Button;
