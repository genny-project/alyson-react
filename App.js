import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Home } from './native-code/screen';
import store from './client/views/store';

export default class App extends Component {

   render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
