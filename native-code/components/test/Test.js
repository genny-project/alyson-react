import React, { Component } from 'react'
import { Text, View } from 'react-native'
import store from '../../../client/views/store';

class Test extends Component {
  render() {
    return (
      <View style={{width:100, height:100 }}>
        <Text> Test Component from react native </Text>
        {console.log("##################>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", store.getState().layouts)}
        <Text>  Data from backend {store.getState().layouts.current} </Text>
      </View>
    )
  }
}

export default Test;



