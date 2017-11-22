import React, { Component } from 'react'
import { Text, View, WebView, Button, Platform, TouchableHighlight} from 'react-native'
import Home from './Home';
import { onSignOut } from '../auth';
import { NavigationActions } from 'react-navigation';
import GeoFencing from '../GeoFencing';

class Keycloak extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '',
        headerTintColor: 'orange',
        headerStyle: { backgroundColor: 'white' },
        headerLeft: (
            <Button
                title='Home'
                onPress={() => {
                    const route = (Platform.OS === 'ios') ? 'iOSScanner' : 'AndroidScanner'
                    // const { navigate } = navigation
                    // navigate(route);
                    onSignOut().then(() => console.log( "User Signed Out" ));
                }
            }/>
        )
    });

    static navigationOptions = ({ navigation }) => ({
        title: '',
        headerTintColor: 'orange',
        headerStyle: { backgroundColor: 'white' },
        headerRight: (
            <Button
                title="Logout"
                onPress={() => {
                    onSignOut().then(()=> navigation.navigate("Home"));
                }
            } />
        )
    });

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
        polygons: [[ // TODO: remove
            [-37.800254, 144.962483],
            [-37.801098, 144.969902],
            [-37.805201, 144.969215],
            [-37.806591, 144.962778],
            [-37.800254, 144.962483],
        ]],
    }

    componentDidMount() {

        setInterval(() => {

            navigator.geolocation.getCurrentPosition(
                (position) => {

                    var lastPosition = JSON.stringify(position);
                    this.setState({lastPosition});

                    console.log(position.coords);
                    if(position && position.coords) {

                        this.state.polygons.forEach(polygon => {
                            GeoFencing.containsLocation([position.coords.latitude, position.coords.longitude], polygon)
                            .then(() => console.log('point is within polygon'))
                            .catch(() => console.log('point is NOT within polygon'))
                        });
                    }

                    if(this.webView && false) {

                        console.log("sending new position: ");
                        console.log(lastPosition);

                        this.webView.injectJavaScript(
                        `(function () {

                            let event = new CustomEvent('native-message', {
                                detail: {
                                    "lastPosition": ${lastPosition}
                                }
                            })

                            document.dispatchEvent(event);

                        })(window)`);
                    }

                },
                (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );

        }, 5000);

        //
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //
        //
        // });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onMessage = (message) => {
        this.state.currentMessage = message;
        console.log("Received message: ");
        if(message.nativeEvent) {
            console.log(message.nativeEvent.data);
        }
    }

    render() {

        const patchPostMessageFunction = function() {
            var originalPostMessage = window.postMessage;

            var patchedPostMessage = function(message, targetOrigin, transfer) {
                originalPostMessage(message, targetOrigin, transfer);
            };

            patchedPostMessage.toString = function() {
                return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
            };

            window.postMessage = patchedPostMessage;
        };

        const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';

        return (
            <WebView
                ref={x => {this.webView = x}}
                source={{ uri: 'http://localhost:3000' }}
                allowUrlRedirect={true}
                scalesPageToFit={false}
                injectedJavaScript={patchPostMessageJsCode}
                onMessage={this.onMessage}
                bounces={false}
            />
        );
    }
}


export default Keycloak;
