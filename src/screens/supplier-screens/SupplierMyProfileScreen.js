import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../assets/supplier.png";
import ListItemSupplierProfile from "../../components/ListItemSupplierProfile";
import LogoutScreen from "../LogoutScreen";

function SupplierMyProfileScreen({ stackScreensNavigation: navigation }) {
  const [logoutConfirmation, updateLogoutConfirmation] = React.useState(false);

  function closeLogoutConfirmation() {
    updateLogoutConfirmation(false)
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section_blue}>
          <Text style={styles.bigTex}>My Profile</Text>
          <View style={styles.middle_blue_view}>
            <View>
              <Image source={logo} style={{ width: 94, height: 94 }} />
            </View>
            <View style={styles.blue_side_text_view}>
              <Text style={styles.supplier_name}>Don Jazzy</Text>
              <Text style={styles.supplier_email}>donjazzyagain@gmail.com</Text>
              <Pressable
                style={styles.edit_photo_button}
                onPress={() => console.log("hello world the great minds")}
              >
                <Text style={styles.edit_btn_text}>Edit Photo</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{
          width: '100%',
        }}>
          <View style={styles.main}>
            <TouchableHighlight underlayColor="#00000010" onPress={() => {
              navigation.navigate("SupplierProfileDetailScreen")
            }}>
              <View style={styles.list}>
                <View style={styles.v}>
                  <View>
                    <MaterialCommunityIcons
                      name="account-circle-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text style={styles.second}>Profile</Text>
                </View>
                <View style={styles.v}>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#00000010" onPress={() => {
              
            }}>
              <View style={styles.list}>
                <View style={styles.v}>
                  <View>
                    <Feather name="bell" size={24} color="black" />
                  </View>
                  <Text style={styles.second}>Notification</Text>
                </View>
                <View style={styles.v}>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#00000010" onPress={() => {
              
            }}>
              <View style={styles.list}>
                <View style={styles.v}>
                  <View>
                    <Feather name="settings" size={24} color="black" />
                  </View>
                  <Text style={styles.second}>Setting</Text>
                </View>
                <View style={styles.v}>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#00000010" onPress={() => {
              
            }}>
              <View style={styles.list}>
                <View style={styles.v}>
                  <View>
                    <AntDesign name="questioncircleo" size={24} color="black" />
                  </View>
                  <Text style={styles.second}>Help</Text>
                </View>
                <View style={styles.v}>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableHighlight style={styles.logout_btn} underlayColor="#114E9310" onPress={()=>{
        updateLogoutConfirmation(true);
      }}>
        <>
          <MaterialCommunityIcons name="logout" size={24} color="#147df5" />
          <Text style={styles.lout_text}>Logout </Text>
        </>
      </TouchableHighlight>
      { logoutConfirmation && <LogoutScreen close={closeLogoutConfirmation} /> }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  main: {
    padding: 20,
    paddingVertical: 0,
    marginTop: 20
  },
  section_blue: {
    backgroundColor: "#147df5",
    height: 215,
    paddingTop: 30,
    paddingBottom: 30,
    paddingEnd: 16,
    paddingStart: 16,
  },
  bigTex: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    lineHeight: 33,
    fontStyle: "normal",
  },
  middle_blue_view: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
  },
  edit_photo_button: {
    width: 90,
    height: 30,
    borderColor: "#ffff",
    justifyContent: "center",
    borderWidth: 2,
    marginTop: 12,

    textAlign: "center",
  },
  btn_text: {
    color: "#ffff",
  },
  edit_btn_text: {
    color: "#ffff",
    fontFamily: "Manrope_700Bold",
    textAlign: "center",
  },
  blue_side_text_view: {
    marginLeft: 18,
    paddingTop: 10,
  },
  supplier_name: {
    color: "#ffffff",
    fontFamily: "Manrope_700Bold",
    lineHeight: 22,
    fontSize: 16,
    fontStyle: "normal",
  },
  supplier_email: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Manrope_400Regular",
    lineHeight: 15,
    fontStyle: "italic",
  },
  logout_btn: {
    marginEnd: 20,
    marginStart: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 120,
    paddingRight: 120,
    borderColor: "#147df5",
    borderWidth: 2,
    marginBottom: 30
    // height: 50,
  },
  lout_text: {
    color: "#147df5",
    margin: 10,
  },



  //////////////////////
  list: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 7,
    justifyContent: "space-between",
  },
  second: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
    lineHeight: 19,
  },
  first: {
    color: "#21334f",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 33,
    fontStyle: "normal",
    backgroundColor: "#eee",
  },
  v: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
});

export default SupplierMyProfileScreen;
