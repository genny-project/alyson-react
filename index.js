import { AppRegistry } from 'react-native';
import App from './App';
import {RootApp} from './native-code/screen/';
import {View, Text} from 'react-native';


AppRegistry.registerComponent('nativeAndWeb', () => <View> <Text> Hello </Text></View>);

