// import './grid.scss';
import React, { Component } from 'react';
import { array, number, any } from 'prop-types';
// import {Div} from '../../../../views/components/native-components';

class GridCol extends Component {

  static propTypes = {
    position: array,
    children: any,
    ratio: number
  }

  render() {
      
    var { position, children, ratio } = this.props;

    const style = {
      'flexGrow': ratio
    };

    return (
      <Div>
        {children}
      </Div>
    );
  }
}

export default GridCol;
