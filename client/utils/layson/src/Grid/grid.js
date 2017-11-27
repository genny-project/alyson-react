import React, { Component } from 'react';
import { any, number } from 'prop-types';
import GridRow from './row';

class Grid extends Component {
  static propTypes = {
    children: any,
    rows: number,
    cols: any
  }

  generateGrid(rows, cols) {

    const { children } = this.props;

    const layout = [];
    for (let i = 0; i < rows; i++) {
      let childs = React.Children.toArray(children);
      const rowChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[0] == i;
      });

      layout.push(
        <GridRow position={i} cols={cols} key={i}>
          {rowChildren}
        </GridRow>
      );
    }
    return layout;
  }

  render() {
    const { rows, cols } = this.props;
    return (
      <div>{this.generateGrid(rows, cols)}</div>
    );
  }
}

export default Grid;
