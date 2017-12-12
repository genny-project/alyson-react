// import './header.scss';
import React, { Component } from 'react';
import { string, object } from 'prop-types';
import { IconSmall, Profile, ImageView, Dropdown, Label } from '../';
import { GennyNotification } from '../../genny';
import { GennyBridge } from 'client/utils/genny';
import { Div } from 'nativeAndWeb/native-code/components/native-components';
import { Image } from 'react-native'

class Header extends Component {
  static defaultProps = {
    className: '',
    style: {},
  }

  static propTypes = {
    className: string,
    style: object,
  }

  state = {
    isVisible: false
  }

  handleClickProfile = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  }

  handleLogout = () => {
    this.sendData('LOGOUT', {
      code: 'LOGOUT',
    });
  }

  handleAccount = () => {
    this.sendData('ACCOUNTS', {
      code: 'ACCOUNTS',
    });
  }

  handleClickImage = () => {
    //console.log("clicked profile image");
  }

  sendData(event, data) {
    console.log('send', data);
    GennyBridge.sendLogout(event, data);
  }

  render() {
    const { className, projectTitle, userName, userImage, style } = this.props;
    const { isVisible } = this.state;

    const componentStyle = {
      ...style,
    };

    return (
      <Div>
        <Div>
          <Label text={projectTitle} />
        </Div>
        <Div>
          <Div>
            <Label>  `Welcome, ${userName}`</Label>
            <Image source={userImage}/>
            <Dropdown visible={isVisible}>
              <Label> Profile </Label>
              <Label> sAccount </Label>
              <Label>Sign Out </Label>
            </Dropdown>
          </Div>
          <Label> Icon goes here </Label>
        </Div>
      </Div>
    );
  }
}

export default Header;
