// import './input.scss';
import React, { Component } from 'react';
import { string } from 'prop-types';
import { InputDropdown, InputEmail, InputPassword, InputPhone, InputText, InputTextarea, InputMasked } from '../';
import {Div} from '../../native-components';

class Input extends Component {
  static defaultProps = {
    className: '',
    type: ''
  }

  static propTypes = {
    className: string,
    type: string,
  }

  render() {
    const { type } = this.props;
    return (
      <Div>
        
      </Div>
    );
  }
}

export default Input;
