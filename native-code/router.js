import {Stacknavigator} from 'react-navigation';
import {Home} from './screen';
import {Keycloak} from './screen';


const signedIn = Stacknavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  }

});

const signedOut = Stacknavigator({
  Keycloak: {
    screen: Keycloak,
    navigationOptions: {
      tabBarLabel: "Keycloak Login/Signup"
    }
  }
});


const createRootNavigator = (signedIn= false)=> {
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
}



export {signedIn, signedOut,createRootNavigator};
