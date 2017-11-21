import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from 'client/views/store';
import {App} from 'client/views/app';


class RootApp extends Component {
constructor(props){
  super(props);
}

render (){
  return (
    <Provider stoer={Store}>
      <App/>
    </Provider>

  );
}

}

export default RootApp;