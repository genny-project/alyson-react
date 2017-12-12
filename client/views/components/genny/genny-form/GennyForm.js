// import './gennyForm.scss';
import React, { Component } from 'react';
import { Form } from '../../';
import { object, array } from 'prop-types';
import store from 'client/views/store';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class GennyForm extends Component {

  state = {
  }

  static propTypes = {

  };

  render() {

    const { ask } = this.props;
    console.log(ask);

    return (
      <Div className="genny-form">
        <Form {...this.props} asks={ask.data} />
    </Div>
    );
  }
}

export default GennyForm;
