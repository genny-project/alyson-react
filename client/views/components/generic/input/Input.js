// import './input.scss';
import React, { Component } from 'react';
import { string } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class Input extends Component {
  static defaultProps = {
    className: '',
    type: ''
  }

  static propTypes = {
    className: string,
    type: string,
  }

  render() {
    const { type } = this.props;
    return (
      <Div>
      </Div>
    );
  }
}

export default Input;
