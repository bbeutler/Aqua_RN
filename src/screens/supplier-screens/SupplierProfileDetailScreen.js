import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import logo from "../../../assets/supplierprofiledetail.png";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../../components/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SupplierTopBarNavigation from "../../navigators/supplier-navigators/SupplierTopTab/SupplierTopBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "../../navigators/supplier-navigators/SupplierTopTab/SupplierTopBarNavigation";
// import { Dimensions } from "react-native-web";

function SupplierProfileDetailScreen() {
  return (
    <>
      <View style={styles.blue_background}>
        <View>
          <Image source={logo} style={{ width: 94, height: 94 }} />
        </View>
        <View style={styles.cameracircle}>
          <Feather name="camera" size={14} color="black" />
        </View>
        <Text style={styles.jazz}>Don Jazzy</Text>
        <Text style={styles.email}>donjazzyagain@gmail.com</Text>
      </View>
      <MyTabs />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%"
    // paddingTop: StatusBar.currentHeight,
  },
  // scrollView: {
  //   backgroundColor: Colors.white,
  //   marginHorizontal: 10,
  //   flex: 1,
  // },
  titlebar: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  back_arrow_side: {
    color: "#21334f",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  back_text: {
    color: "#21334f",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 19,
    marginLeft: 8,
  },
  edit_profile: {
    marginLeft: 67,
  },
  edit_profile_text: {
    color: "#21334f",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 19,
  },
  blue_background: {
    backgroundColor: "#147df5",
    height: 204,
    paddingBottom: 32,
    paddingTop: 32,
    alignItems: "center",
  },
  jazz: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    fontStyle: "normal",
    color: "#ffffff",
    marginTop: 8,
  },
  email: {
    color: "#ffffff",
    fontWeight: "300",
    lineHeight: 16,
    fontSize: 12,
    fontStyle: "italic",
  },
  cameracircle: {
    backgroundColor: "#ffffff",
    height: 32,
    width: 32,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 90,
    right: 140,
  },
});

export default SupplierProfileDetailScreen;
