import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import {HTMLView} from 'react-native-htmlview';
import {Test} from '../components/test';
// import App from 'client/views/app';

class Home extends Component {
  render() {
    console.log(App);
    return (
      <View style={style}>
      <Text> Home directory </Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  marginTop: 50,
  marginLeft: 10,
  flex: 1
})

export default Home;

