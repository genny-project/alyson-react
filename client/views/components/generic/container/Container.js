// import './container.scss';
import React, { Component } from 'react';
import { any, string } from 'prop-types';
import {Div} from '../../native-components';
class Container extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: any,
    className: string,
  }

  render() {
    return (
      <Div>
        {this.props.children}
      </Div>
    );
  }
}

export default Container;
