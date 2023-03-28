import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SupplierHeader({ title, height }) {
  return (
    <>
      <View style={styles.toolbar}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        <Text style={styles.toolbarTxt}>Back</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTxt}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  toolbarTxt: {
    color: "#21334F",
    fontSize: 14,
    marginHorizontal: 5,
  },
  topContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  topContainerTxt: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SupplierHeader;
