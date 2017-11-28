import React, { Component } from 'react';
import { string } from 'prop-types';
import {Button} from 'react-native';

class ButtonNative extends Component {
  static propTypes = {
    text: string
  };

  render() {
    const { text } = this.props;
    return (
      <Button> {text} </Button> 
    );
  }
}

export default ButtonNative;