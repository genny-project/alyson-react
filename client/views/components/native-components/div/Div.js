import React, { Component } from 'react'
import { View } from 'react-native'

class Div extends Component {

  // TODO: check if web OR native and render accordingly
  render() {
    return (
      <View>
      {/* {this.props.children} */}
      <Text>Div</Text>
      </View>
    )
  }
}

export default Div;