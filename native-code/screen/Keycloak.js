import React, { Component } from 'react'
import { Text, View, WebView, Button, Platform, TouchableHighlight} from 'react-native'
import Home from './Home';
import {onSignOut} from '../auth';
import {NavigationActions} from 'react-navigation';
 class Keycloak extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Keycloak Login',
    headerTintColor: 'orange',
    headerStyle: { backgroundColor: 'white' },
    headerLeft: (
      <Button
        title='Home'
        onPress={() => {
          const route = (Platform.OS === 'ios') ? 'iOSScanner' : 'AndroidScanner'
          // const { navigate } = navigation
          // navigate(route);
          onSignOut().then(() => console.log( "User Signed Out" ));
        }
        }
      />
    )
  });
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Keycloak Login',
    headerTintColor: 'orange',
    headerStyle: { backgroundColor: 'white' },
    headerRight: (
      <Button
      title="Logout"
        onPress={() => {
          onSignOut().then(()=> navigation.navigate("Home"));
        }
        }
      />
    )
  });

  render() {
    const source = {uri: 'http://localhost:3000'}
    return (
        <WebView
          source={source}
          scalesPageToFit={false}
          /> 
    );
  }
}


export default Keycloak;
