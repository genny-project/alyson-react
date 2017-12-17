// import './button.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, any, func } from 'prop-types';
import {Div, Button} from 'react-tags-html';
const ButtonNative = Button;
let Button = undefined;
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
    onClick: func
  }

  getClickFunction = () => {
    const { onClick, handleClick } = this.props;

    if (handleClick) {
      return handleClick
    } else {
      return onClick
    }
  }

  render() {
    const { children, type, className, href, onClick, style, color } = this.props;
    const componentStyle = { ...style, };

    const clickFunc = this.getClickFunction();

    const btn = (
      <Div className={`button ${className} ${type}`} style={componentStyle}>
        <ButtonNative onClick={clickFunc} style={{backgroundColor: color}}>{children}</ButtonNative>
      </Div>
    );

    return btn;
  }
}

export default Button;
