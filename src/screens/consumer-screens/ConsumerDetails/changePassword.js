import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const changePassword = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.changePassword}>
          <ConsumerHeader title="Setting" />
          <View style={styles.changePasswordForm}>
            <Text style={styles.title}>Change Password</Text>
            <Text
              style={{
                textAlign: "left",
                fontSize: 14,
                fontWeight: "400",
                padding: "5%",
                paddingBottom: 7,
              }}
            >
              Current Password
            </Text>
            <View style={styles.inputLayer}>
              <TextInput
                type="password"
                placeholder="Current password"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
              <MaterialCommunityIcons
                style={styles.icon}
                name="eye-off"
                size={24}
                color="black"
              />
            </View>
            <Text
              style={{
                textAlign: "left",
                fontSize: 14,
                fontWeight: "400",
                padding: "5%",
                paddingBottom: 7,
              }}
            >
              New Password
            </Text>
            <View style={styles.inputLayer}>
              <TextInput
                type="password"
                placeholder="Current password"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
              <MaterialCommunityIcons
                style={styles.icon}
                name="eye-off"
                size={24}
                color="black"
              />
            </View>
            <Text
              style={{
                textAlign: "left",
                fontSize: 14,
                fontWeight: "400",
                padding: "5%",
                paddingBottom: 7,
              }}
            >
              Confirm Password
            </Text>
            <View style={styles.inputLayer}>
              <TextInput
                type="password"
                placeholder="Current password"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
              <MaterialCommunityIcons
                style={styles.icon}
                name="eye-off"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.btn}>
              <Pressable style={styles.btnprimary}>
                <Text style={styles.btnPrimaryText}>LogOut</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default changePassword;

const styles = StyleSheet.create({
  changePassword: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
  },
  inputLayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    padding: "5%",
  },
  input: {
    height: 48,
    width: "90%",
    borderWidth: 1,
    opacity: 0.4,
    borderColor: "lightgrey",
    paddingLeft: 10,
  },
  icon: {
    position: "absolute",
    right: "7%",
    opacity: 0.4,
  },
  btnprimary: {
    width: 329,
    height: 50,
    backgroundColor: "#147DF5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  changePasswordForm: {
    position: "absolute",
    top: 30,
    justifyContent: "center",
    width: "100%",
  },
});
