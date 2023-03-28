import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { ScrollView } from "react-native-web";

const Container = ({ children }) => {
  return (
    <ScrollView showVerticalScrollIndicator={false} style={styles.container}>
      <View>{children}</View>
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
