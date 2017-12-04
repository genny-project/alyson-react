import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {string} from 'prop-types';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  render(){
     return <View>
         <TextInput
          onChangeText={text => {this.setState(text);}}
          value = {this.state.text}
           />
       </View>;
  }
}

export default Input;

