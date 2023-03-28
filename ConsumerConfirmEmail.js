import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
// import SnackBar from '../../components/SnackBar/SnackBar';

function CusConfirmEmail({navigation}) {
    const [snackBarStatus, updateSnackBar] = useState(false);

    function showSnackBar(duration = 3000) {
      updateSnackBar(true)
      setTimeout(() => {
        updateSnackBar(false)
        navigation.navigate("Login")
      }, duration)
    }

    return (
        <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 30, flex: 1, justifyContent: "space-between" }}>
            <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image source={require('./src/assets/bluelogo.png')} />
            </View>
            <View style={{flex: 1, paddingTop: 90}}>

                <View style={{
                backgroundColor: "#21334F0D", 
                justifyContent: "center", 
                alignItems: "center",
                alignSelf: "center",
                width: 124,
                height: 124,
                borderRadius: 62,
                }}>
                    <FontAwesome name="send" size={49} color="#147DF5" />
                </View>

                <View style={{ paddingTop: 60 }}>
                    <Text style={{ fontFamily: "Manrope_400Regular", marginTop: 20, flexShrink: 1, textAlign: "center" }}>
                        Click on the link below to confirm your email address and start enjoying Aqua Water.
                    </Text>
                </View>

                <TouchableHighlight style={{ marginTop: 20 }} underlayColor="#114E93" onPress={() => {
                    showSnackBar()
                }} >
                <View style={{
                    width: "100%",
                    backgroundColor: "#147DF5",
                    height: 48,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Confirm your Email</Text>
                </View>
                </TouchableHighlight>
            </View>
            { snackBarStatus && <SnackBar text="Your email has been confirmed" icon="check-circle" iconColor="#38B000" /> }
        </SafeAreaView>
    );
}

export default CusConfirmEmail;