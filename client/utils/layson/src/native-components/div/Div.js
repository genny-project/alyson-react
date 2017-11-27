import React, { Component } from 'react';
import { View } from 'react-native';
import {any} from 'prop-types';
class Div extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    children: any
  }

  static defaultProps = {
    children: <Text> Test from Div Component </Text>
  }
  
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

export default Div;
