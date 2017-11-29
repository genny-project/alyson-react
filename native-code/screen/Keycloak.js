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
        destinations: [],
        fakeGPSCounter: 0,
    }

    watchGPS() {

        setInterval(() => {

            navigator.geolocation.getCurrentPosition(
                (position) => {

                    var lastPosition = JSON.stringify(position);
                    this.setState({lastPosition});

                    if(position && position.coords) {

                        this.state.destinations.forEach(destination => {

                            console.log(this.state.fakeGPSCounter);
                            console.log(destination);

                            GeoFencing.containsLocation({
                                x: position.coords.latitude,
                                y: position.coords.lontitude,
                            }, destination.center, destination.radius)
                            .then(() => {

                                if(destination.status == "out" && this.state.fakeGPSCounter == 5) {
                                    this.onEnterGPSCircle(destination)
                                }
                            })
                            .catch(() => {

                                if(destination.status == "in" && this.state.fakeGPSCounter == 2) {
                                    this.onExitGPSCircle(destination)
                                }
                                else if(destination.status == "out" && this.state.fakeGPSCounter == 5) {
                                    this.onEnterGPSCircle(destination)
                                }

                                this.state.fakeGPSCounter += 1;
                            })
                        });
                    }
                },
                (error) => console.log(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );
        }, 5000);
    }

    onExitGPSCircle = (destination) => {

        console.log("did exit destination: ");
        console.log(destination);
        this.state.destinations.filter(x => x.latitude == destination.latitude && x.longitude == destination.longitude)[0].status = "out";
        this.sendDataToWeb("GEOFENCE", {
            value: "GEOFENCE_EXIT",
            code: destination.exitCode,
        })
    }

    onEnterGPSCircle = (destination) => {

        console.log("did enter destination: ");
        console.log(destination);
        this.state.destinations.filter(x => x.latitude == destination.latitude && x.longitude == destination.longitude)[0].status = "in";
        this.sendDataToWeb("GEOFENCE", {
            value: "GEOFENCE_ENTRY",
            code: destination.enterCode,
        })}

    sendDataToWeb = (event_id, data) => {

        if(this.webView) {

            this.webView.injectJavaScript(
            `(function () {

                let event = new CustomEvent('native-message', {
                    detail: {
                        "id": "${event_id}",
                        "data": ${JSON.stringify(data)}
                    }
                });

                document.dispatchEvent(event);

            })(window)`);
        }
    }

    componentDidMount() {
        this.watchGPS()
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    handleMessage = (message) => {

        console.log("Received [" + message.id + "]")
        switch (message.id) {
            case "GEOFENCE":
            this.state.destinations = [{
                ...message.data,
                status: "in" // default: in the area
            }];
            break;
            default: console.log("Unknown data [" + message.id + "]")
        }
    }

    onMessage = (message) => {

        this.state.currentMessage = message;
        if(message.nativeEvent && message.nativeEvent.data) {

            try {
                let data = JSON.parse(message.nativeEvent.data);
                if(data) this.handleMessage(data);

            } catch (e) {
                return false;
            }
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

        console.log("loading url: https://v2.channel40.com.au");

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
