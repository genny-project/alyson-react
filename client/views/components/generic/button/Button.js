// import './button.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, any, func } from 'prop-types';
import { Div, ReactButton } from 'react-tags-html/src';

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
        <ReactButton onClick={clickFunc} style={{backgroundColor: color}}>{children}</ReactButton>
      </Div>
    );

    return btn;
  }
}

export default Button;
