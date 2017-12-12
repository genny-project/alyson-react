// import './button.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, any, func } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components';
import { Button as NativeButton } from 'react-native';

class Button extends Component {
  static defaultProps = {
    className: '',
    href: '',
    type: '',
    onClick: () => {},
  }

  static propTypes = {
    children: any.isRequired,
    className: string,
    href: string,
    type: string,
    onClick: func,
  }

  render() {
    const { children, type, className, href, onClick } = this.props;
    return  <Div>
       {/* <NativeButton onClick={onClick} className={type} >{children}</NativeButton> */}
     </Div>;
  }
}

export default Button;
