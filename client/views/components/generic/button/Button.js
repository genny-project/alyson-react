// import './button.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, any, func } from 'prop-types';
import {Div} from '../../native-components';

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
    const btn = (
      <Div>
        <button onClick={onClick} className={type} >{children}</button>
      </Div>
    );

    return href
      ? <Link to={href}>{btn}</Link>
      : btn;
  }
}

export default Button;
