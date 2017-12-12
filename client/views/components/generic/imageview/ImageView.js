import React, { Component } from 'react';
import { string, any } from 'prop-types';
import { Image } from 'react-native';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class ImageView extends Component {

  static propTypes = {
    caption: any,
    src: string,
  };

  render() {

    const { caption, src, onClick } = this.props;

    return (
      <Div>
        <Image src={src}/>
        {caption}
      </Div>

    );
  }
}

export default ImageView;
