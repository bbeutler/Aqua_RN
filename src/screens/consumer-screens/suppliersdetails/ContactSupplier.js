import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ContactSupplier = () => {
  return (
    <View style={styles.contactSupplier__container}>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 14,
            color: "#21334F",
            fontFamily: "Manrope_600SemiBold",
          }}
        >
          Arizona Water Inc
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#21334F",
            fontFamily: "Manrope_400Regular",
          }}
        >
          Ikeja Lagos
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#21334F",
            fontFamily: "Manrope_400Regular",
            paddingTop: 10,
          }}
        >
          65% customer's rate
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Pressable
          style={{
            width: 96,
            height: 32,
            backgroundColor: "#147DF5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Manrope_400Regular",
              color: "white",
            }}
          >
            Contact Seller
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactSupplier;

const styles = StyleSheet.create({
  contactSupplier__container: {
    width: "80%",
    marginHorizontal: "10%",
    height: 63,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    elevation: 10,
  },
});
