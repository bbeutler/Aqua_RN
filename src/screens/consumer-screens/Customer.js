import React from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomerNavigation from '../../navigators/consumer-navigators/CustomerNavigation';

function Customer({navigation}) {
    return (
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: "#FFF"}}>
            <CustomerNavigation stackScreensNavigation={navigation} />
        </SafeAreaView>
    );
}

export default Customer;