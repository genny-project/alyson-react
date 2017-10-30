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
    return (
        <WebView
          source={{ uri: 'http://localhost:3000' }}
          /> 
    );
  }
}


export default Keycloak;
