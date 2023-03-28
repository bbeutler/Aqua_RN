import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function CheckMailScreen({navigation}) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 30, flex: 1, justifyContent: "space-between", backgroundColor: "#FFF" }}>
      <View style={{flex: 1, }}>
        <View style={{
          backgroundColor: "#21334F0D", 
          justifyContent: "center", 
          alignItems: "center",
          alignSelf: "center",
          width: 82,
          height: 82,
          borderRadius: 41
          }}>
          <Image
            source={ require("../../../assets/images/colored_email.png") }
          />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 20, textAlign: "center" }}>Check your mail</Text>
          <Text style={{ fontFamily: "Manrope_400Regular", marginTop: 20, flexShrink: 1, textAlign: "center" }}>
            We have sent a password recover instruction to your account.
          </Text>
        </View>

        <TouchableHighlight style={{ marginTop: 20 }} underlayColor="#114E93" onPress={() => {
          navigation.navigate("CreateNewPasswordScreen")
        }} >
          <View style={{
            width: "100%",
            backgroundColor: "#147DF5",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Open email app</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{flexShrink: 1, textAlign: "center"}}>
          <Text style={{ textAlign: "center", fontFamily: "Manrope_400Regular" }}>Did not receive the email? Check your spam filter, or </Text>
          <Text style={{ textAlign: "center", fontFamily: "Manrope_600SemiBold", color: "#147DF5" }}>try another email</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CheckMailScreen;
