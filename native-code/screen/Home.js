import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import {Test} from '../components/test';
import App from 'client/views/app';
// import LaysonApp from '../../client/utils/layson/dev/App';

//App inside View
class Home extends Component {
  render() {
    return (
      <View>
      <App/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  marginTop: 100,
  marginLeft: 30,
  flex: 1
})

export default Home;
