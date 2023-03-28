import React from 'react';
import { View, Text } from 'react-native';

import HomeScreen from '../../../screens/consumer-screens/ConsumerDetails/HomeScreen';

function HomeTab({ stackScreensNavigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <HomeScreen stackScreensNavigation={stackScreensNavigation} />
        </View>
    );
}

export default HomeTab;