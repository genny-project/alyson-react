import React, { Component } from 'react';
import { JSONLoader } from '../src/json-loader';
import { ComponentCollection } from '../src/component-collection';
import Button from './ButtonComponent';
import Div from './Div';
import layout from './layout.json';

class JSONLoaderTest extends Component {
  render() {
    const collection = new ComponentCollection({
      'Button': Button,
      'div': Div
    });

    return (
      <JSONLoader componentCollection={collection} layout={layout} />
    );
  }
}

export default JSONLoaderTest;
