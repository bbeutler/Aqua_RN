import React from 'react';
import { View } from 'react-native';

import SupplierHomePageScreen from "../../../screens/supplier-screens/SupplierHomePageScreen";

export const homeName = "Home";
function HomeTab({ stackScreensNavigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <SupplierHomePageScreen stackScreensNavigation={stackScreensNavigation} />
        </View>
    );
}

export default HomeTab;