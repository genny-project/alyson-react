// import './ImageView.scss';
import React, { Component } from 'react';
import { string, any } from 'prop-types';
import {Image} from 'react-native';
import {Div} from '../../native-components';

class ImageView extends Component {

  static propTypes = {
    caption: any,
    src: string,
  };

  render() {

    const { caption, src, onClick } = this.props;

    return (
      <Div>
        <Image source={src}/>
        {caption}
      </Div>
      
    );
  }
}

export default ImageView;
