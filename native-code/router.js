import React from "react";
import { StackNavigator } from "react-navigation";
// import Home from './screen/Home';
// import Keycloak from './screen/Keycloak';
import {Test} from './components/test';

const SignedIn = StackNavigator({
  Home: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  }
});

const SignedOut = StackNavigator({
  Keycloak: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: "Keycloak Login/Signup"
    }
  }
});

const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: signedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export { SignedIn, SignedOut, createRootNavigator };
