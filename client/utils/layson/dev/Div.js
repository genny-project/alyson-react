import React, { Component } from 'react';
import { any } from 'prop-types';

class Div extends Component {
  static propTypes = {
    children: any,
  };

  render() {
    const { children } = this.props;
    const props = {
      ...this.props,
      children: null,
    };

    delete props.children;

    return (
      <div>
        <p>{JSON.stringify( props )}</p>
        {children}
      </div>
    );
  }
}

export default Div;
