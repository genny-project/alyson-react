// import './grid.scss';
import React, { Component } from 'react';
import { array, number, any } from 'prop-types';

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
      <div className="col"
          key={position}
          style={style}>
        {children}
      </div>
    );
  }
}

export default GridCol;
