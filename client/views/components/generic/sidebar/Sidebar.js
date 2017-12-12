// import './sidebar.scss';
import React, { Component } from 'react';
import { GennyImageView } from '../../../components'
import { object, bool, string, any } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class Sidebar extends Component {

    static propTypes = {
      style: object,
      hasImage: bool,
      src: string,
      caption: any,
      children: any
    };

    render() {

        const { style, hasImage, src, caption, children } = this.props;

        const componentStyle = {
          ...style,
        };

        let imageView = null;
        if ( hasImage ) {
            imageView = <GennyImageView src={src} caption={caption} />;
        }

        return (
            <Div className="sidebar" style={componentStyle}>
              {imageView}
              {children}
          </Div>
        );
    }
}

export default Sidebar;
