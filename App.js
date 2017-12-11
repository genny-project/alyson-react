import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Home } from 'native-code/screen';

export default class App extends Component {

  render() {

     return StackNavigator(
       {
         Home: {
           screen: Home,
           navigationOptions: {
             gesturesEnabled: false
           }
         }
       },
       {
         headerMode: "none",
         mode: "modal",
         initialRouteName: "Home"
       }
     );
  }
}
