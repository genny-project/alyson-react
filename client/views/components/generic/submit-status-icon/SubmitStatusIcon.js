// import './submitStatusIcon.scss';
import React, { Component } from 'react';
import { IconSmall } from '../';
import { string } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class SubmitStatusIcon extends Component {

	static defaultProps = {
    className: '',
    status: ''
  }

  static propTypes = {
    className: string,
    status: string,
  }

  render() {
    const { status } = this.props;
	switch(status) {
	    case "sending":
	        return ( <Div className="ellipsis-anim">
	        			<IconSmall name="brightness_1" size={4} />
	        			<IconSmall name="brightness_1" size={4} />
	        			<IconSmall name="brightness_1" size={4} />
	        		</Div> );
	    case "success":
	        return ( <IconSmall className="success" name="check_circle" size={14} /> );
	    case "error":
	        return ( <IconSmall className="error" name="error" size={14} /> );
	    default:
	        return null;
    }
  }
}

export default SubmitStatusIcon;
