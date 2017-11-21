import { StackNavigator } from "react-navigation";
import Home from './screen/Home';
import {Keycloak} from './screen';

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
    screen: Keycloak,
    navigationOptions: {
      tabBarLabel: "Keycloak"
    }
  }
});

const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
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
