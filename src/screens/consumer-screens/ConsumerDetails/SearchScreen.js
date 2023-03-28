import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { Formik } from "formik";
const SearchScreen = () => {
  return (
    <View style={styles.searchScreen}>
      <ConsumerHeader title="Search" />
      <View style={styles.inputFieldContainer}>
        <Feather
          name="search"
          size={20}
          color="lightgrey"
          style={{ marginLeft: 1, position: "absolute", left: "12%" }}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Type search here...."
        />
      </View>
      <View style={styles.recentSearches}>
        <Text
          style={{
            textAlign: "left",
            color: "rgba(33, 51, 79, 0.6)",
            fontSize: "12",
            fontWeight: "normal",
            padding: 10,
          }}
        >
          Recent
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  inputField: {
    width: "80%",
    height: 20,
    borderWidth: 1,
    borderColor: "#a1a1a1",
    padding: 25,
  },
  inputFieldContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    margin: 5,
  },
  recentSearches: {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    width: "90%",
    position: "absolute",
    top: 120,
  },
});
