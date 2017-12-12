import React, { Component } from 'react';
import { number, any } from 'prop-types';
import {Div} from 'nativeAndWeb/native-code/components/native-components';

class Repeater extends Component {
  static propTypes = {
    count: number,
    children: any
  };

  render() {
    const { count, children } = this.props;
    const list = [];

    for (let i = 0; i < count; i++) {
      list.push(<Div> {children} </Div> );
    }
    return <Div>{list}</Div>;
  }
}

export default Repeater;
