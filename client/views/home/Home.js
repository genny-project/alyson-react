import React, { Component } from 'react';
import { LayoutLoader } from 'client/utils/genny/layout-loader';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class Home extends Component {

  render() {

    return (
      <Div>
        <LayoutLoader/>
      </Div>
    );
  }
}



export default Home;
