import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "./Colors";
function ListItemForTotalSupply({ num, title }) {
  return (
    <View style={styles.list}>
      <View style={{width: "20%", alignItems: "baseline"}}>
        <Text style={[styles.first, {backgroundColor: "#eee", padding: 10}]}>{num}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.second}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  second: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Manrope_500Medium",
  },
  first: {
    color: "#21334F",
    fontFamily: "Manrope_700Bold",
    fontSize: 24,
  },
  v: {
    // textAlign: "center",
  },
});

export default ListItemForTotalSupply;
