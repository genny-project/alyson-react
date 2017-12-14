import React, { Component } from 'react';
import { SocialButton } from 'client/views/components';
import { object, array, any, string } from 'prop-types';
import { GennyBridge } from 'client/utils/genny';
import { Div } from 'react-tags-html';

class GennySocialButton extends Component {

  state = {
  }

  static defaultProps = {
      type: '',
      buttonCode: '',
  }

  static propTypes = {
      type: string,
      buttonCode: string,
  };

  onClick = () => {

      GennyBridge.sendBtnClick(this.props.buttonCode);
    //   switch(this.props.type) {
    //       case "facebook":
    //       break;
    //       default: console.log("button not recognized");
    //   }
  }

  render() {

    return (
      <div className="genny-social-button">
        <SocialButton {...this.props}  onClick={this.onClick}/>
      </div>
    );
  }
}

export default GennySocialButton;
