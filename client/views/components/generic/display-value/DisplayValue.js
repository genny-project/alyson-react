import React, { Component } from 'react';
import { string } from 'prop-types';
import {Label, TextInput} from 'react-native';

class DisplayValue extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    text: 'example text',
    placeholder: ' example placeholder'
  }

  static propTypes = {
    text: string,
    placeholder: string
  }

  render() {
    return (<div>
      < Label> {this.props.text} </Label>  < InputText placeholder={this.props.placeholder} />
    </div >
    );
  }
}

export default DisplayValue; 
