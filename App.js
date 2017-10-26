
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {SignedIn, SignedOut } from './native-code/router';
import {isSignedIn } from './native-code/auth' ; 
import {createRootNavigator} from './native-code/router';

import {Test} from './native-code/components';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false, 
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
    .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(true);
    return <Layout />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
