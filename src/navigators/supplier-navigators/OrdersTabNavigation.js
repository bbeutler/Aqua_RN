import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IncomingOrder from '../../screens/supplier-screens/Orders/IncomingOrder';
import OrderHistory from '../../screens/supplier-screens/Orders/OrderHistory';

const Tab = createMaterialTopTabNavigator();

function Badge({number}) {
    return (
        <View style={{height: 20, width: 20, backgroundColor: '#147DF5', alignItems: 'center', justifyContent: 'center', borderRadius: 6, position: 'absolute', top: 10, right: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>{number}</Text>
        </View>
    );
}

function Tabs(props) {

    return (
        <Tab.Navigator
            initialRouteName="IncomingOrder"
            screenOptions={{
                tabBarActiveTintColor: '#21334F',
                tabBarLabelStyle: { fontSize: 14 },
            }}
            >
            <Tab.Screen
                name="IncomingOrder"
                component={IncomingOrder}
                options={{ 
                    tabBarLabel: 'Incoming Order',
                    tabBarBadge: () => {
                        return <Badge number={8} />
                    }
                }}
            />
            <Tab.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{ tabBarLabel: 'Order History' }}
            />
        </Tab.Navigator>
    );
}

export default function OrdersTabNavigation() {
    return (
        <Tabs />
    );
}