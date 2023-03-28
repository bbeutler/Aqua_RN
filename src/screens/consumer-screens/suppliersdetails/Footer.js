import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer__sort}>
        <Text
          style={{
            color: "white",
            fontFamily: "Manrope_400Regular",
            fontSize: 14,
          }}
        >
          Sort
        </Text>
        <Pressable>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="sort" size={24} color="white" />
          </View>
        </Pressable>
      </View>
      <View style={styles.footer__filter}>
        <Text
          style={{
            color: "white",
            fontFamily: "Manrope_400Regular",
            fontSize: 14,
          }}
        >
          Filter
        </Text>
        <Pressable>
          <Ionicons name="filter" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#21334F",
    // position: "absolute",
    // bottom: 0,
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    zIndex: 99,
  },
  footer__sort: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer__filter: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
