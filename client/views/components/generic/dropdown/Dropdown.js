// import './dropdown.scss';
import React, { Component } from 'react';
import { string, any, bool, element } from 'prop-types';
import { Div, Span, Ul, Li } from "react-tags-html";

class Dropdown extends Component {
  static defaultProps = {
    className: '',
    opened: null,
    showTag: true
  }

  static propTypes = {
    className: string,
    style: string,
    children: any,
    open: bool,
    header: element,
    showTag: bool
  }

  state = {
    isOpen: false
  }

  handleBlur = () => {
    this.setState({
      isOpen: false,
      parentIsOpen: false,
    });
  }


  handleClick = (e) => {
    this.setState({ isOpen: !this.state.isOpen});
  }




  render() {
    const { className, children, style, contentStyle, tagStyle, header, open, noDropdownStyle, showTag,dropType } = this.props;
    let { isOpen, } = this.state;

    if(open != undefined) isOpen = open; // open props overrides

    return (
      <Div className={`dropdown ${className}`} onClick={this.handleClick} onBlur={this.handleBlur}  tabIndex='-1' style={style} >
        <Div className='dropdown-header'>
          {header}
        </Div>
        { isOpen ?
          <Div className={`dropdown-content ${noDropdownStyle ? 'no-style' : null}`} style={contentStyle} >
            { showTag ? <Div className='dropdown-tag' style={tagStyle}></Div> : null }
            {children}
          </Div>
        : null }
      </Div>
    );
  }
}

export default Dropdown;
