// import './dropdown.scss';
import React, { Component } from 'react';
import { string, object, any } from 'prop-types';
import {  } from '../';
import {Div} from 'nativeAndWeb/native-code/components/native-components/';

class Dropdown extends Component {

  static defaultProps = {
    className: '',
  }

  static propTypes = {
    className: string,
    style: string,
    children: any,
  }

  state = {
  }

  render() {
 	  const { className, children, style, visible } = this.props;
    const {  } = this.state;
    const componentStyle = { ...style, };

    return ( visible ? <Div> {children} </Div> : null );
  }
}

export default Dropdown;
