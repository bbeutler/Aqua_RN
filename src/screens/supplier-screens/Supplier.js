import React from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import SupplierNavigation from '../../navigators/supplier-navigators/SupplierNavigation';

function Supplier({navigation}) {
    return (
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: "#FFF" }}>
            <SupplierNavigation stackScreensNavigation={navigation} />
        </SafeAreaView>
    );
}

export default Supplier;