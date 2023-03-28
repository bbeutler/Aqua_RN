import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather, Entypo } from "@expo/vector-icons";

function ConsumerHeader({ navigation }) {
  return (
    <View style={styles.consumerHeader}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTxt}>Hi, Godswill 👋</Text>
        <View style={styles.consumerHeaderCart}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("ProdcutDetails");
          }}>
            <>
              <MaterialCommunityIcons
                style={styles.icon}
                name="cart-outline"
                size={24}
                color="white"
              />
            </>
          </TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            style={styles.icon}
            size={24}
            color="white"
          />
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.searchBar__unclicked}>
          <View style={{ height: 48, width: "10%", justifyContent: "center", alignItems: "center", }}>
            <Feather
              name="search"
              size={20}
              color="#979797"
            />
          </View>
          <TextInput style={styles.input} placeholder="Search for suppliers" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  consumerHeader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#147DF5",
    height: 120,
  },
  toolbar: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  consumerHeaderCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  toolbarTxt: {
    color: "#fff",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 16,
    marginHorizontal: 20,
  },
  topContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: "100%"
  },
  topContainerTxt: {
    fontSize: 10,
    fontWeight: "bold",
  },
  input: {
    fontFamily: "Manrope_400Regular",
    fontSize: 14,
    // marginLeft: 10,
    // width: Dimensions.get("window").width - 100
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    height: 48,
    padding: 10,
    paddingHorizontal: 10
  },
  searchBar__unclicked: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
    alignItems: "center",
    width: "100%"
  },
  icon: {
    paddingLeft: 10,
  },
});

export default ConsumerHeader;
