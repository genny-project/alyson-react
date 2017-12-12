import React from 'react';
import { string } from 'prop-types';
import { Div, Span } from 'nativeAndWeb/native-code/components/native-components';
import { Text } from 'react-native';

Label.propTypes = {
  text: string
};

Label.defaultProps = {
  text: 'Label Example'
};

function Label(props) {
  return (
    <Text>{props.text}</Text>
  );
}

export default Label;
