// import './home.scss';
import React, { Component } from 'react';
// import { TestComponent } from '../components/generic';
// import { DisplayValue } from '../components/generic';
import { LayoutLoader } from 'client/utils/genny/layout-loader';
import {Div} from '../components/native-components';

class Home extends Component {
  componentDidMount() {
    // document.getElementById('mounting-preview').remove();
  }
  render() {
    return (
      <Div>
        <LayoutLoader/>
      </Div>
    );
  }
}



export default Home;
