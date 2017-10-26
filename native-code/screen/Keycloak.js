import React, { Component } from 'react'
import { Text, View, WebView, Button} from 'react-native'

 class Keycloak extends Component {
  render() {
    return (
      <View>
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}/> 

      </View>
    )
  }
}


export default Keycloak;
