import React from 'react';
import { View, Text } from 'react-native';

import TransactionsScreen from '../../../screens/consumer-screens/ConsumerDetails/TransactionsScreen';

function TransactionsTab({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <TransactionsScreen />
        </View>
    );
}

export default TransactionsTab;