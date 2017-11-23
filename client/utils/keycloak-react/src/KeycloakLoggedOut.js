import React, { Component } from 'react';
import { object, any } from 'prop-types';
import { Div } from '../../../views/components/native-components';


class KeycloakLoggedOut extends Component {
  static contextTypes = {
    keycloak: object,
  }

  static propTypes = {
    children: any,
  };

  render() {
    if ( this.context.keycloak.isLoggedIn()) {
      return null;
    }

    return (
      <Div>
        {this.props.children}
      </Div>
    );
  }
}

export default KeycloakLoggedOut;
