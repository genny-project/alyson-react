import { StackNavigator } from "react-navigation";
import Home from './screen/Home';
import Keycloak from './screen/Keycloak';
import React, { Component } from 'react';

const SignedIn = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Keycloak"
        }
    }
});

const SignedOut = StackNavigator({
    Keycloak: {
        screen: Keycloak
    }
});

const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      headerMode: "none",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export { SignedIn, SignedOut, createRootNavigator };
