import React from "react";
import { Pressable, TouchableOpacity, Text } from "react-native";
import Colors from "./Colors";

function DivButton({ title, onPress }) {
  return (
    <TouchableOpacity style={{ backgroundColor: Colors.red }} onPress={onPress}>
      <Text> {title}</Text>
    </TouchableOpacity>
  );
}

export default DivButton;
