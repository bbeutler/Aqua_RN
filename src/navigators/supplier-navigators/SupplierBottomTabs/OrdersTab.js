import React from 'react';
import { View } from 'react-native';
import OrdersTabNavigation from "../OrdersTabNavigation";

import SupplierHeader from "../../../components/SupplierHeader";

export const ordersName = "Orders";
function OrdersTab({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <SupplierHeader title="Orders" />
            <OrdersTabNavigation />
        </View>
    );
}

export default OrdersTab;