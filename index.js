import { AppRegistry } from 'react-native';
import App from './App';
import {View, Text} from 'react-native';
import {RootApp} from './native-code/screen';


AppRegistry.registerComponent('nativeAndWeb', () => RootApp);
