import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeTab, { homeName } from "./SupplierBottomTabs/HomeTab";
import OrdersTab, { ordersName } from "./SupplierBottomTabs/OrdersTab";
import AccountTab, { accountName } from "./SupplierBottomTabs/AccountTab";
import FavouriteCustomers from "../../screens/supplier-screens/FavouriteCustomers";

const Tab = createBottomTabNavigator();

function SupplierNavigation({ stackScreensNavigation }) {

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        safeAreaInsets={{
          bottom: 10
        }}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === ordersName) {
              iconName = focused ? "shopping" : "shopping-outline";
            } else if (rn === accountName) {
              iconName = focused ? "account" : "account";
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
          activeTintColor: "#21334F",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, paddingTop: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        })}
      >
        <Tab.Screen name={homeName} children={() => <HomeTab stackScreensNavigation={stackScreensNavigation} />} />
        <Tab.Screen name={ordersName} component={OrdersTab} />
        <Tab.Screen name={accountName} children={() => <AccountTab stackScreensNavigation={stackScreensNavigation}/>} />
      </Tab.Navigator>
    </View>
  );
}

export default SupplierNavigation;
