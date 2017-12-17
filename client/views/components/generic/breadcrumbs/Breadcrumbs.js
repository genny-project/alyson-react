// import './breadcrumbs.scss';
import React, { Component } from 'react';
import { string, object } from 'prop-types';
import { IconSmall } from '../';
import { Div, Li, Ul, Span } from 'react-tags-html/src';

class Breadcrumbs extends Component {

  static defaultProps = {
    className: '',
  }

  static propTypes = {
    className: string,
    style: object,
    currentPath: string,
  }

  state = {
  }

  createBreadcrumbs = () => {

    let stringPath = this.props.currentPath;
    if(stringPath && stringPath.length > 0) {
        if(stringPath[stringPath.length - 1] == "/") {
            stringPath = stringPath.slice(0, -1);
        }
        let filepath = stringPath.split('/');
        return filepath.map((path, index) => {
            if(path && path.length > 0) {
                return <Li key={index} onClick={() => this.props.onClick(path)}>
                    <Span> Icon </Span>
                    <Span> {path} </Span>
                  </Li>;
            }
        });
    }
    return null;
  }

  render() {
    const { className, style, home } = this.props;
    const componentStyle = { ...style, };
    const breadcrumbs = this.createBreadcrumbs();

    return <Div className={`breadcrumbs ${className}`} style={componentStyle}>
        <Ul className="breadcrumbs-main">
          <Li className="breadcrumbs-home">
            <Span> icon home </Span>
            <Span> Home </Span>
          </Li>
          {breadcrumbs}
        </Ul>
      </Div>;
  }
}

export default Breadcrumbs;
