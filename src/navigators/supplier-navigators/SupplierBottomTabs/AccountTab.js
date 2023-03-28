import React from 'react';
import { View, Text } from 'react-native';

import SupplierMyProfileScreen from "../../../screens/supplier-screens/SupplierMyProfileScreen";
import SupplierHeader from "../../../components/SupplierHeader";

export const accountName = "Account";
function AccountTab({ stackScreensNavigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <SupplierMyProfileScreen stackScreensNavigation={stackScreensNavigation}/>
        </View>
    );
}

export default AccountTab;