import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const SuppliersDetailsHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.suppliersDetailsHeader}>
        <View style={[styles.toolbar, { width: "20%" }]}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          <Text style={styles.toolbarTxt}>Back</Text>
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.topContainerTxt}>Arizona Water</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            marginRight: 25,
          }}
        >
          <Pressable style={{ paddingRight: 10 }}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </Pressable>
          <Pressable>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </Pressable>
          <Pressable
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "red",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuppliersDetailsHeader;

const styles = StyleSheet.create({
  toolbar: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  suppliersDetailsHeader: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#147DF5",
  },
  toolbarTxt: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topContainerTxt: {
    fontSize: 14,
    fontFamily: "Manrope_700Bold",
    color: "#fff",
  },
  suppliersDetailsHeader__cart_notification: {},
});
