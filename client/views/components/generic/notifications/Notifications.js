import React, { Component } from 'react';
import { string, int, object } from 'prop-types';
import { IconSmall, Dropdown, NotificationItem } from '../';
import { Div, Span } from 'nativeAndWeb/native-code/components/native-components';

class Notifications extends Component {

  static defaultProps = {
    className: '',
    notifications:{}
  }

  static propTypes = {
    className: string,
    notifications: object
  }

  state = {
    isVisible: false
  }

  handleClickNotifs = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  }

  render() {

    const { className, notifications } = this.props;
    const { isVisible } = this.state;

    return (
      <Div className="notifications" onClick={this.handleClickNotifs}>
        <IconSmall name="forum"/>
        <Div className="number" >{Object.keys(notifications).length}</Div>
        <Dropdown visible={isVisible}>
          <Div className="notifications-dropdown">
      	        {
                    Object.keys(notifications).map((notification_key, index) => {
                        return <NotificationItem notification={notifications[notification_key]} />
                    })
      	        }
          </Div>
        </Dropdown>
    </Div>
    )
  }
}

export default Notifications;
