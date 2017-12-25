// import './home.scss';
import React, { Component } from 'react';
import { LayoutLoader } from '../../utils/genny/layout-loader';
import { View, Text } from 'react-native';

class Home extends Component {

    render() {

        const { layouts, baseEntity } = this.props;

        /* Get the current layout */
        const { current, loaded } = layouts;

        /* If the current layout is null or this layout hasn't been loaded display a LayoutNotFound page */
        if ( !current ) {
            return null;
        }

        if ( loaded[current] == null ) {
            return <View><Text>Layout not found...</Text></View>;
        }

        return (
            <View className="home">
                <LayoutLoader layout={loaded[current]} />
            </View>
        );
    }
}


export default Home;
