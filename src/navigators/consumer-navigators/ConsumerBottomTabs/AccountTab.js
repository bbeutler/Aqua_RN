import React from 'react';
import { View, Text } from 'react-native';

import AccountScreen from '../../../screens/consumer-screens/ConsumerDetails/AccountScreen';

function AccountTab({ stackScreensNavigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <AccountScreen stackScreensNavigation={stackScreensNavigation}/>
        </View>
    );
}

export default AccountTab;