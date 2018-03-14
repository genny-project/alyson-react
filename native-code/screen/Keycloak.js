import React, { Component } from 'react'
import { Text, View, WebView, Button, Platform, TouchableHighlight} from 'react-native'
import Home from './Home';
import { onSignOut } from '../auth';
import { NavigationActions } from 'react-navigation';
import GeoFencing from '../GeoFencing';

var self = null;
class Keycloak extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '',
        headerStyle: { backgroundColor: 'white' },
        // headerRight: (
        //     <Button
        //         title='Refresh'
        //         onPress={() => {
        //             if(self) {
        //                 self.reloadWebView();
        //             }
        //         }}
        //     />
        // )
        headerLeft: (
            <TouchableHighlight
                //style={{backgroundColor: 'black'}}
                onPress={() => {
                    if(self) {
                        self.reloadWebView();
                    }
                }}
            >
                <Image
                    style={{width: 36, height: 36}}
                    // black icon
                    source={{uri: 'https://i.imgur.com/XPQpQbr.png'}}
                    // white icon
                    //source={{uri: 'https://i.imgur.com/SnyaHwg.png'}}
                />
            </TouchableHighlight>
        )
    });

    state = {
        initialPosition: null,
        lastPosition: null,
        destinations: [],
    }

    watchGPS() {

        setInterval(() => {

            navigator.geolocation.getCurrentPosition(
                (position) => {

                    // we check if we moved enough before telling BE
                    var newPosition = JSON.stringify(position);
                    var lastPosition = this.state.lastPosition ? JSON.parse(this.state.lastPosition) : null;

                    if(lastPosition == null) {

                        lastPosition = {
                            coords: {
                                latitude: 0,
                                longitude: 0
                            }
                        }
                    }

                    this.setState({
                        lastPosition: newPosition
                    });

                    if(position && position.coords) {

                        this.sendDataToWeb('GPS_UPDATE', [position]);

                        this.state.destinations.forEach(destination => {

                            GeoFencing.containsLocation({
                                x: position.coords.latitude,
                                y: position.coords.longitude,
                            },
                            {
                                x: destination.latitude,
                                y: destination.longitude
                            },  destination.radius)
                            .then(() => {

                                if(destination.status == "out") {
                                    this.onEnterGPSCircle(destination)
                                }
                            })
                            .catch(() => {

                                if(destination.status == "in") {
                                    this.onExitGPSCircle(destination)
                                }
                            })
                        });
                    }
                },
                (error) => console.log(error.message),
                {enableHighAccuracy: true, timeout: 20000}
            );
        }, 10000);
    }

    onExitGPSCircle = (destination) => {

        this.state.destinations.filter(x => x.latitude == destination.latitude && x.longitude == destination.longitude)[0].status = "out";
        this.sendDataToWeb("GEOFENCE", {
            value: "GEOFENCE_EXIT",
            code: destination.exitCode,
        })
    }

    onEnterGPSCircle = (destination) => {

        this.state.destinations.filter(x => x.latitude == destination.latitude && x.longitude == destination.longitude)[0].status = "in";
        this.sendDataToWeb("GEOFENCE", {
            value: "GEOFENCE_ENTER",
            code: destination.enterCode,
        })
    }

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

    constructor(props) {
        super(props);
        self = this;
    }

    componentDidMount() {

        this.watchGPS()
        this.state.refresh = this.reloadWebView;
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    handleMessage = (message) => {

        switch (message.id) {
            case "GEOFENCE":

                let found = false;
                this.state.destinations.forEach(destination => {

                    if(destination.enterCode == message.data.enterCode) {
                        destination = {
                            ...message.data,
                            status: "out"
                        };
                    }
                });

                if(!found) {
                    this.state.destinations.push({
                        ...message.data,
                        status: "out"
                    })
                }
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

    reloadWebView = () => {
        this.webView.reload();
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
                source={{ uri: 'https://v2.channel40.com.au' }} //http://localhost:3000
                allowUrlRedirect={true}
                scalesPageToFit={false}
                startInLoadingState={true}
                injectedJavaScript={patchPostMessageJsCode}
                onMessage={this.onMessage}
                bounces={false}
            />
        );
    }
}


export default Keycloak;
