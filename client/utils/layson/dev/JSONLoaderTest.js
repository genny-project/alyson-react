import React, { Component } from 'react';
import { JSONLoader } from '../src/json-loader';
import { ComponentCollection } from '../src/component-collection';
import ButtonNative from './ButtonNative';
import WebDiv from './WebDiv';
import layout from './layout.json';

class JSONLoaderTest extends Component {
  render() {
    const collection = new ComponentCollection({
      'Button': ButtonNative,
      'div': WebDiv
    });

    return (
      <JSONLoader componentCollection={collection} layout={layout} />
    );
  }
}

export default JSONLoaderTest;
