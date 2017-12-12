import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components'
import { Text } from 'react-native';

class IconSmall extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    className: '',
    fontSize: 18,
    name: 'android'
  }

  static propTypes = {
    className: string,
    name: string,
    fontSize: number
  }

  render() {
    const { className, size, name, onClick } = this.props;
    return (
      <Div className={`icon material-icons ${className} `} onClick={onClick} style={{ fontSize: size }}><Text>{name}</Text></Div>
    );
  }
}

export default IconSmall;
