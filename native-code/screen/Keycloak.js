import React, { Component } from 'react'
import { Text, View, WebView, Button, Platform} from 'react-native'


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
          const { navigate } = navigation
          navigate(route)
        }
        }
      />
    )
  })

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
