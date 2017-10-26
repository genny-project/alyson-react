import React from "react";
import { StackNavigator } from "react-navigation";
// import { Home } from "./screen";
// import { Keycloak } from "./screen";
import Home from './screen/Home';
import Keycloak from './screen/Keycloak';

const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  }
});

const SignedOut = StackNavigator({
  Keycloak: {
    screen: Keycloak,
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
        screen: signedOut,
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
