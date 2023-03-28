import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/index";
import HomeTab from "./ConsumerBottomTabs/HomeTab";
import TransactionsTab from "./ConsumerBottomTabs/TransactionsTab";
import AccountTab from "./ConsumerBottomTabs/AccountTab";

const Tab = createBottomTabNavigator();

const CustomerNavigation = ({ stackScreensNavigation }) => {
  return (
    <Tab.Navigator
      safeAreaInsets={{
        bottom: 10
      }}
      labelled={false}
      barStyle={{
        width: Dimensions.get("window").width,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
      }}
      activeColor="#147DF5"
      inactiveColor="#979797"
      style={{ width: "100%" }}
    >
      <Tab.Screen
        children={() => <HomeTab stackScreensNavigation={stackScreensNavigation} />}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={TransactionsTab}
        name="Transactions"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        children={() => <AccountTab stackScreensNavigation={stackScreensNavigation}/>}
        name="Acccount"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerNavigation;