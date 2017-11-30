import React from 'react';
import {Text} from 'react-native';
import {string} from 'prop-types';


const Label = (props) => {
  return (
    <Text> {this.props.children} </Text>
  );
}

Labal.propTypes ={
  children = 'string'
}

export default Label;
