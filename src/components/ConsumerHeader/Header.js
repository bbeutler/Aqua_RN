import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

function ConsumerHeader({ title }) {
  return (
    <View style={styles.consumerHeader}>
      <View style={[styles.toolbar, { width: "20%" }]}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        <Text style={styles.toolbarTxt}>Back</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTxt}>{title}</Text>
      </View>
      {/* <Pressable style={{width: "20%", alignItems: "flex-end"}}>
        <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  consumerHeader: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#000"
    // position: "absolute",
    // top: 0,
  },
  toolbarTxt: {
    color: "#21334F",
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
    flex: 1,
  },
  topContainerTxt: {
    fontSize: 14,
    fontFamily: "Manrope_700Bold",
  },
});

export default ConsumerHeader;
