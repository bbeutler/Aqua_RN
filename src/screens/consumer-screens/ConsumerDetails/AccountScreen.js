import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  TouchableHighlight
} from "react-native";
import React, { useState } from "react";
import Menu from "../../../components/ConsumerAccount/Menu";
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutScreen from "../../LogoutScreen";

const AccountScreen = ({ stackScreensNavigation: navigation }) => {
  const [logoutConfirmation, updateLogoutConfirmation] = useState(false);

  function closeLogoutConfirmation() {
    updateLogoutConfirmation(false)
  }

  return (
    <>
    <View style={styles.homeheader}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.headerprofile}>
          <View style={{height: 100, width: 100, borderRadius: 50, borderWidth: 3, borderColor: "#fff"}}>
            <Image
              style={styles.avatar}
              source={require("../../../../assets/customers/customer-profile-pic.jpg")}
            />
          </View>
          <View style={styles.profiledetails}>
            <Text style={styles.name}>Abimbola Thomas</Text>
            <Text style={styles.email}>abimbolathomas@gmail.com</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Edit Photo</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: "space-between", width: "100%"}}>

        <View style={{flex: 1, padding: 20}}>
            <TouchableHighlight
              style={{
                marginBottom: 10
              }}
              underlayColor="#00000010"
              onPress={() => {
                navigation.navigate("CustomerProfileSettings")
              }}>
              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <FontAwesome5 name="user-circle" size={22} color="black" />
                  <Text style={{marginLeft: 10, fontFamily: "Manrope_400Regular", fontSize: 14}}>Profile</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="black" />
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                marginBottom: 10
              }}
              underlayColor="#00000010"
              onPress={() => {
                navigation.navigate("CustomerNotificationSettings")
              }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <MaterialCommunityIcons name="bell-outline" size={22} color="black" />
                    <Text style={{marginLeft: 10, fontFamily: "Manrope_400Regular", fontSize: 14}}>Notifications</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="black" />
                </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                marginBottom: 10
              }}
              underlayColor="#00000010"
              onPress={() => {
                
              }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <MaterialCommunityIcons name="cog-outline" size={22} color="black" />
                    <Text style={{marginLeft: 10, fontFamily: "Manrope_400Regular", fontSize: 14}}>Settings</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="black" />
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  marginBottom: 10
                }}
                underlayColor="#00000010"
                onPress={() => {
                  navigation.navigate("CustomerReferSettings")
                }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Feather name="users" size={22} color="black" />
                    <Text style={{marginLeft: 10, fontFamily: "Manrope_400Regular", fontSize: 14}}>Invite Friends</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="black" />
                </View>
              </TouchableHighlight>

              <TouchableHighlight
              style={{
                marginBottom: 10
              }}
              underlayColor="#00000010"
              onPress={() => {

              }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Feather name="help-circle" size={22} color="black" />
                    <Text style={{marginLeft: 10, fontFamily: "Manrope_400Regular", fontSize: 14}}>Help</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="black" />
                </View>
              </TouchableHighlight>
        </View>


        <TouchableHighlight style={{ paddingHorizontal: 20, marginBottom: 30 }} underlayColor="#114E9310" onPress={()=>{
          updateLogoutConfirmation(true);
        }}>
          <View style={styles.btnprimary}>
            <Feather name="log-out" size={24} color="#147DF5" />
            <Text style={styles.btnPrimaryText}>Logout</Text>
          </View>
        </TouchableHighlight>
      </View>
      { logoutConfirmation && <LogoutScreen close={closeLogoutConfirmation} /> }
    </View>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  homeheader: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  profileHeader: {
    backgroundColor: "#147DF5",
    display: "flex",
    width: "100%",
    height: 242,
    padding: 20,
    paddingVertical: 30
  },
  avatar: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    color: "#FFFFFF",
  },
  headerprofile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25
  },
  profiledetails: {
    marginLeft: 10
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Manrope_600SemiBold",
  },
  email: {
    fontFamily: "Manrope_400Regular",
    color: "white",
  },
  btn: {
    width: 100,
    padding: 3,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnText: {
    color: "white",
    fontFamily: "Manrope_700Bold",
  },
  iconavatar: {
    height: 22,
    width: 22,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 14,
  },
  profilebtn: {
    width: 14,
    height: 8,
  },
  menu: {
    flex: 1,
  },
  btnprimary: {
    width: "100%",
    height: 50,
    fontFamily: "Manrope_600SemiBold",
    borderWidth: 2,
    borderColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: {
    fontSize: 16,
    fontFamily: "Manrope_600SemiBold",
    textAlign: "left",
    color: "#147DF5",
    paddingLeft: 5,
  },
  btnImage: {
    width: 24,
    height: 24,
  },
});
