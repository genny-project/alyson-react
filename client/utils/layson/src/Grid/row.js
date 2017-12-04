// import './grid.scss';
import React, { Component } from 'react';
import { any, number } from 'prop-types';
import GridCol from './col';
import {Div} from '../native-components';

class GridRow extends Component {
  static propTypes = {
    children: any,
    position: number,
    cols: any,
  };

  layoutCols(cols) {

    const { children, position } = this.props;

    const layout = [];
    const limit = typeof cols == 'object' ? cols.length : cols;
    for (let i = 0; i < limit; i++) {

      let childs = React.Children.toArray(children);
      const colChildren = childs.filter(child => {
        return child.props.position != undefined && child.props.position[1] == i;
      });

      const ratio = typeof cols == 'object' ? cols[i] : 1;

      layout.push(
        <GridCol
            key={`${position}${i}`}
            position={[position, i]}
            ratio={ratio}>
            {colChildren}

        </GridCol>
        );
    }

    return layout;
  }

  render() {
    const { cols } = this.props;
    return <Div> {this.layoutCols(cols)}</Div>;
  }
}

export default GridRow;
