import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../client/views/store';
import App from '../../App';
import {View, Text} from 'react-native';
import {Home} from '../screen';
class RootApp extends Component {
constructor(props){
  super(props);
}

render (){
  console.log(Provider);
  console.log(store);
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
}



export default RootApp;
