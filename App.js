import React from 'react';
import {Provider} from "react-redux";
import store from "./src/utilities/storage/store";
import Home from './src/views/';
import Routing, {Router} from './src/utilities/routing/index';

const Route = Routing.Route;

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={Home}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
