import React, {Component} from 'react';
import {View} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


const IconSmallNative = (props) => {
return (
  <View> 
    <FontAwesome> props.name </FontAwesome>
  </View>

);
}

IconSmallNative.defaultProps = {
  name: 'chevronLeft'
}


export default IconSmallNative;