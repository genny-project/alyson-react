import React, { Component } from 'react';
import { any } from 'prop-types';
import {Div} from '../src/native-components';


class WebDiv extends Component {
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
      <Div>
        {JSON.stringify( props )}
        {children}
      </Div>
    );
  }
}

export default WebDiv;
