import React from 'react';
import { View, Text, Dimensions, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

function LogoutScreen({ close }) {
    return (
        <View style={{
            width: Dimensions.get('window').width, 
            padding: 20, 
            top: 0,
            position: "absolute",
            backgroundColor: "#00000010",
            height: "100%"
            // marginTop: Constants.statusBarHeight
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center", 
                padding: 20,
                width: "100%",
                backgroundColor: "#fff",
                shadowOffset: { width: 0, height: 2.5 },
                shadowColor: '#BEBEBE',
                shadowOpacity: 1,
                elevation: 10,
            }}>
                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={[{color: "#000", fontSize: 14, fontFamily: "Manrope_700Bold"}]}>Logout confirmation</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#E8E7E7", width: "100%", marginVertical: 10 }}></View>
                    <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 12 }}>Are you sure you want to logout from your account?</Text>

                    <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
                       
                    }} >
                        <View style={{
                            backgroundColor: "#147DF5",
                            height: 48,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Yes</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{marginTop: 10}} underlayColor="#114E9310" onPress={() => {
                       close()
                    }} >
                        <View style={{
                            borderWidth: 1,
                            borderColor: "#147DF5",
                            height: 48,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "#147DF5", fontFamily: "Manrope_700Bold"}}>No</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

export default LogoutScreen;