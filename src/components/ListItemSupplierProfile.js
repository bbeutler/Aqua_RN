import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "./Colors";
function ListItemSupplierProfile({ iconname, title, arrowIcon }) {
  return (
    <View style={styles.list}>
      <View style={styles.v}>
        <View>{iconname}</View>
        <Text style={styles.second}>{title}</Text>
      </View>
      <View style={styles.v}>
        <Entypo name={arrowIcon} size={24} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 7,
    justifyContent: "space-between",
  },
  second: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
    lineHeight: 19,
  },
  first: {
    color: "#21334f",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 33,
    fontStyle: "normal",
    backgroundColor: "#eee",
  },
  v: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
});

export default ListItemSupplierProfile;
