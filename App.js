import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppFlow from "./AppFlow";
<<<<<<< HEAD
import Login from "./Login";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import CreateNewPasswordScreen from "./src/screens/CreateNewPasswordScreen";
import ForgotPassword from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import SupplierDetailsScreen from "./src/screens/consumer-screens/suppliersdetails/SupplierDetailsScreen";
=======
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import CreateNewPasswordScreen from "./src/screens/CreateNewPasswordScreen";
import ForgotPassword from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
>>>>>>> baf77fb46fdb35852c3731ed4d92ab1b7b68880a

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <SupplierDetailsScreen />
=======
      <AppFlow />
      {/* <ForgotPasswordScreen /> */}
      {/* <CreateNewPasswordScreen /> */}
>>>>>>> baf77fb46fdb35852c3731ed4d92ab1b7b68880a
    </>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
