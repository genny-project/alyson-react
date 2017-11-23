import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Div extends Component {
  render() {
    return (
      <View>
      {this.props.children}
      </View>
    )
  }
}

export default Div;