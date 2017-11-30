// import './template.scss';
import React, { Component } from 'react';
import { string, object, any } from 'prop-types';
import {  } from '../';
import {Div} from '../../native-components';

class Template extends Component {

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
 	  const { className, children, style } = this.props;
    const {  } = this.state;
    const componentStyle = { ...style, };

    return (
      <Div>
        {children}
      </Div>
    );
  }
}

export default Template;
