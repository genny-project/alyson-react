// import './app.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '../src/Grid/grid';
import { JSONLoader } from '../src/json-loader';
import { ComponentCollection } from '../src/component-collection';
import { Repeater } from '../src/repeater';
import layout from './layout.json';
import ButtonNative from './ButtonNative';

class App extends Component {
  render() {
    const collection = new ComponentCollection({
      Grid,
      ButtonNative,
      Repeater,
    });
    
    return <JSONLoader componentCollection={collection} layout={layout} />;
  }
}
// Get rid of this and instead import app 
// ReactDOM.render( <App />, document.getElementById( 'root' ));

export default App;

