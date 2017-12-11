// import './app.scss';
import config from 'client/config/config';
import React, { Component } from 'react';
import Routes from './Routes.js';
import { func, object } from 'prop-types';
//import { Keycloak, KeycloakLogin, KeycloakLogout, KeycloakLoggedIn, KeycloakAccount } from 'client/utils/keycloak-react/src';
import { Div } from 'client/views/components/native-components';
//import keycloakAdapter from 'client/utils/keycloak-js';
import Login from 'react-native-login';

class App extends Component {
  static propTypes = {
    appStart: func,
    authLoggedIn: func,
    keycloak: object,
  };

  componentDidMount() {
    if (config.backendEnabled) {
      /* Start the app */
      this.props.appStart();
    }
  }

  handleAuthSuccess = keycloak => {
    /* Hide the loading spinner */

    //document.getElementById('mounting-preview').remove();

    /* Send off the auth logged in action */
    this.props.authLoggedIn({
      token: keycloak.getToken(),
      info: keycloak.getInfo(),
    });
  }

  getDefaultRedirectUri = () => {
    if (window && window.location && window.location.origin) {
      return window.location.origin
    } else {
      return 'http://10.1.120.182:3000';
    }
  }

  render() {
    // const keycloak = this.props.keycloak;
    // const keycloakConfig = keycloak.config;

    /* If the backend isn't enabled just render the app */
    // if (!config.backendEnabled) {
    //   return (
    //     <Div>
    //       <main>
    //         <content>
    //           <Routes />
    //         </content>
    //       </main>
    //     </Div>
    //   );
    // }
    

    // /* Render nothing if we haven't yet received the keycloak config */
    // if (!keycloakConfig) {
    //   return (
    //     <Div></Div>
    //   );
    // }



    console.log(Login)

    Login.getTokens().then(tokens => {

      if(tokens) {
        this.props.authLoggedIn({
          token: tokens.access_token,
          info: '',
        });
      }
    });

    const config = {
      url: 'http://10.1.120.182:8180/auth',
      realm: 'genny',
      client_id: 'genny',
      redirect_uri: 'http://localhost:3000/',
      vertx_url: "http://10.1.120.182:8088/frontend", 
      credentials: {  
        secret: "056b73c1-7078-411d-80ec-87d41c55c3b4"
      },
      'ssl-required': "none",
      "auth-server-url": "http://10.1.120.182:8180/auth",
      "resource": "genny",
    };

    Login.startLoginProcess(config).then(tokens => {

      this.props.authLoggedIn({
        token: tokens.access_token,
        info: '',
      });
    });

    return (
      <Routes />
    )

    // return (
    //   <Keycloak config={keycloakConfig} adapter={keycloakAdapter} defaultRedirectUri={this.getDefaultRedirectUri()} onAuthSuccess={this.handleAuthSuccess}>
    //     <Div>
    //       {keycloak.logout && <KeycloakLogout />}
    //       {keycloak.accounts && <KeycloakAccount force />}
    //       <KeycloakLoggedIn>
    //         <main>
    //           <content>
    //             <Routes />
    //           </content>
    //         </main>
    //       </KeycloakLoggedIn>
    //     </Div>
    //     <KeycloakLogin />
    //   </Keycloak>
    // );
  }
}

export default App;