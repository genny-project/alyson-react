import React, { Component } from 'react';
import { number, any } from 'prop-types';
import {Div} from '../../../../views/components/native-components';

class Repeater extends Component {
  static propTypes = {
    count: number,
    children: any
  };

  render() {
    const { count, children } = this.props;
    const list = [];

    for( let i = 0; i < count; i++ ) {
      list.push(<div key={`${children.key}-${i}`}>{children}</div>);
    }

    return (
      <Div>
        {list}
      </Div>
    );
  }
}

export default Repeater;
