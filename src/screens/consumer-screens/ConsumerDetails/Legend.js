import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Legend = (props) => {
  const { color, name } = props;
  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <Pressable style={{ backgroundColor: color, width: 20, height: 20 }} />
      <Text>{name}</Text>
    </View>
  );
};

export default Legend;

const styles = StyleSheet.create({});
